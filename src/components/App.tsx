import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { BottomNavigation, BottomNavigationAction, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { MainRoutes } from '../core/enums';
import { IWorkCard } from '../core/interfaces';
import { getAllWorkCards } from '../services/dataService';
import Header from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { WorkCardList } from './WorkCard/WorkCardList';
import { WorkCardListItem } from './WorkCard/WorkCardListItem';
import { WorkCardForm } from './WorkCardForm/WorkCardForm';

const StyledSearchForm = styled.form`
	width: 100%;
	display: flex;
	margin-top: 16px;
`

function App() {
	const [workCards, setWorkCards] = useState<Array<IWorkCard>>();
	// const [value, setValue] = React.useState(0);

	const fetchData = useCallback(async () => {
		try {
			const data = await getAllWorkCards();
			console.log(data);
			setWorkCards(data);
		} catch (error) {
			console.error(error);
		}
	}, [])


	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="app">
			<Router>
				<Header />
				<Navigation />

				<Box sx={{
					display: 'flex'
				}}>
					<StyledSearchForm  >
						<TextField
							placeholder="Szukaj..."
							sx={{
								marginRight: '16px',
								marginLeft: '16px',
								width: '100%',
								borderRadius: '30px'
							}}
						/>
					</StyledSearchForm>
				</Box>

				<Switch>
					<Route path={MainRoutes.Employees}>
						<h2>Pracownicy</h2>
					</Route>
					<Route path={MainRoutes.Employees}>
						<h2>Klienci</h2>
					</Route>
					<Route path={MainRoutes.AddWorkCard}>
						<WorkCardForm />
					</Route>
					<Route path={MainRoutes.Home}>
						<WorkCardList>
							{workCards?.map((card, idx) => (
								<WorkCardListItem
									data={card}
									key={idx}
								/>
							))}
						</WorkCardList>
					</Route>
				</Switch>

				{/* <Paper sx={{
					position: 'fixed',
					bottom: 0,
					left: '50%',
					transform: 'translate(-50%,0)',
					maxWidth: '475px',
					width: '100%',
					zIndex: '999'
				}} elevation={3}>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					>
						<BottomNavigationAction label="Usuń" icon={<RestoreIcon />} />
						<BottomNavigationAction label="Dodaj" icon={<FavoriteIcon />} />
						<BottomNavigationAction label="Opcje" icon={<LocationOnIcon />} />
					</BottomNavigation>
				</Paper> */}
			</Router>
		</div>
	);
}

export default App;

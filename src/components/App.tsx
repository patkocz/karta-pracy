import { Box } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainRoutes } from '../core/enums';
import { IWorkCard } from '../core/interfaces';
import { getAllWorkCards } from '../services/dataService';
import Header from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import WorkCardForm from './WorkCardForm/WorkCardForm';

function App() {
	const [workCards, setWorkCards] = useState<Array<IWorkCard>>();

	const fetchData = useCallback(async () => {
		try {
			const data = await getAllWorkCards();
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
						<Box
							sx={{
								'& :first-of-type': {
									mt: 2
								}
							}}
							className="worksheets"
						>
							{workCards?.map((card, idx) => (
								<Box
									sx={{
										borderRadius: '4px',
										boxShadow: 1,
										height: 64,
										bgcolor: "#fff",
										width: '100%',
										mb: 1,

									}}
									key={idx}
								// className="worksheets-card"
								>
									{card?.customer?.name}
								</Box>
							))}
						</Box>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

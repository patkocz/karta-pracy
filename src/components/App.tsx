import { Box } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainRoutes } from '../core/enums';
import { IWorkCard } from '../core/interfaces';
import { getAllWorkCards } from '../services/dataService';
import Header from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { WorkCardList } from './WorkCard/WorkCardList';
import { WorkCardListItem } from './WorkCard/WorkCardListItem';
import { WorkCardForm } from './WorkCardForm/WorkCardForm';

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
			</Router>
		</div>
	);
}

export default App;

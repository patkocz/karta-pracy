import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IWorkCard } from '../core/interfaces';
import { getAllWorkCards } from '../services/dataService';
import Header from './Header/Header';
import { Navigation } from './Navigation/Navigation';

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
					<Route path="/employees">
						<h2>Pracownicy</h2>
					</Route>
					<Route path="/customers">
						<h2>Klienci</h2>
					</Route>
					<Route path="/">
						<div className="worksheets">
							{workCards?.map((card, idx) => (<div key={idx} className="worksheets-card">{card?.customer?.name}</div>))}
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

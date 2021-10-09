import React, { useCallback, useEffect, useState } from 'react';
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
			<Header />
			<Navigation />
			<div className="worksheets">
				{workCards?.map((card, idx) => (<div key={idx} className="worksheets-card">{card?.customer?.name}</div>))}
			</div>
		</div>
	);
}

export default App;

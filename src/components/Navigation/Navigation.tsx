import BusinessIcon from '@mui/icons-material/Business';
import { Fab, Typography } from '@mui/material';
import React from 'react';
import { addWorkCard } from '../../services/dataService';

const iconPath = process.env.PUBLIC_URL + '/svg/business_black_24dp.svg';

export const Navigation = () => {
	const onClick = async () => {
		const ref = await addWorkCard({
			date: new Date(),
			customer: {
				name: 'Jan Kowalski'
			},

			workDescription: 'jakieś tam koszenie'
		})

		console.log(ref)
	}

	return (
		<div className="navigation">
			<div className="navigation-item">
				<div className="navigation-item-icon">
					<Fab onClick={onClick} color="primary" aria-label="add" className="add-btn">
						<BusinessIcon />
					</Fab>
				</div>
				{/* <div className="navigation-item-label">Klienci</div> */}
				<Typography>Klienci</Typography>
			</div>

			<div className="navigation-item">
				<div className="navigation-item-icon">
					<Fab color="primary" aria-label="add" className="add-btn">
						<BusinessIcon />
					</Fab>
				</div>
				<div className="navigation-item-label">Klienci</div>
			</div>

			<div className="navigation-item">
				<div className="navigation-item-icon">
					<Fab color="primary" aria-label="add" className="add-btn">
						<BusinessIcon />
					</Fab>
				</div>
				<div className="navigation-item-label">Klienci</div>
			</div>

			<div className="navigation-item">
				<div className="navigation-item-icon">
					<Fab color="primary" aria-label="add" className="add-btn">
						<BusinessIcon />
					</Fab>
				</div>
				<div className="navigation-item-label">Klienci</div>
			</div>
		</div>
	)
}

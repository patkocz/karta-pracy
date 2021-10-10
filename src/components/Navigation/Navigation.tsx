import BusinessIcon from '@mui/icons-material/Business';
import { Fab } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainRoutes } from '../../core/enums';


export const Navigation = () => {

	return (
		<div className="navigation">
			<Link to={MainRoutes.Home}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<Fab color="primary" aria-label="add" className="add-btn">
							<BusinessIcon />
						</Fab>
					</div>
					<div className="navigation-item-label">Karty Pracy</div>
				</div>
			</Link>

			<Link to={MainRoutes.Customers}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<Fab color="primary" aria-label="add" className="add-btn">
							<BusinessIcon />
						</Fab>
					</div>
					<div className="navigation-item-label">Klienci</div>
				</div>
			</Link>

			<Link to={MainRoutes.Employees}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<Fab color="primary" aria-label="add" className="add-btn">
							<BusinessIcon />
						</Fab>
					</div>
					<div className="navigation-item-label">Pracownicy</div>
				</div>
			</Link>
		</div>
	)
}

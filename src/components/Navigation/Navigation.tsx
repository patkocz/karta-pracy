import BusinessIcon from '@mui/icons-material/Business';
import { BottomNavigation, BottomNavigationAction, Fab } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MainRoutes } from '../../core/enums';


export const Navigation = () => {

	return (

		<div className="navigation">
			<NavLink to={MainRoutes.Home}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<BusinessIcon />
					</div>
				</div>
			</NavLink>

			<NavLink to={MainRoutes.Customers}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<BusinessIcon />
					</div>
				</div>
			</NavLink>

			<NavLink to={MainRoutes.Employees}>
				<div className="navigation-item">
					<div className="navigation-item-icon">
						<BusinessIcon />
					</div>
				</div>
			</NavLink>
		</div>
	)
}

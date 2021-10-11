import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MainRoutes } from '../../core/enums';

const Header = () => {
	return (
		<div className="header">
			<div className="header-content">

			</div>

			<div className="action-section">
				<h2>40 000,00 zł</h2>
				<Link to={MainRoutes.AddWorkCard}>
					<Fab color="primary" aria-label="add" className="add-btn">
						<AddIcon />
					</Fab>
				</Link>
			</div>

		</div>
	)
}

export default Header;

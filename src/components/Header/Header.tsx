import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<div className="header-content">

			</div>

			<div className="action-section">
				<h2>40 000,00 zł</h2>
				<Fab color="primary" aria-label="add" className="add-btn">
					<AddIcon />
				</Fab>
			</div>

		</div>
	)
}

export default Header;

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const iconPath = process.env.PUBLIC_URL +  '/svg/add_black_24dp.svg';

const Header = () => {

  return (
    <div className="header">
      <div className="header-content">
        <div className="stats">
          <div className="stats-item">
            <div className="stats-item-value">120</div>
            <div className="stats-item-label">zlecenia</div>
          </div>

          <div className="stats-item">
            <div className="stats-item-value">120</div>
            <div className="stats-item-label">zlecenia</div>
          </div>

          <div className="stats-item">
            <div className="stats-item-value">120</div>
            <div className="stats-item-label">zlecenia</div>
          </div>
        </div>
      </div>

      <div className="action-section">
        <h2>40 000,00 zł</h2>
        {/* <button className="add-btn">
          <img src={iconPath} alt="add item icon" />
        </button> */}
        <Fab color="primary" aria-label="add" className="add-btn">
          <AddIcon />
        </Fab>
      </div>

    </div>
  )
}

export default Header;
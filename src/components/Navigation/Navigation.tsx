import React from 'react'
import { Fab, Typography } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const iconPath = process.env.PUBLIC_URL +  '/svg/business_black_24dp.svg';

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-item">
        <div className="navigation-item-icon">
          <Fab color="primary" aria-label="add" className="add-btn">
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

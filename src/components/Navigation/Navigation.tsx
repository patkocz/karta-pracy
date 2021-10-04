import React from 'react'

const iconPath = process.env.PUBLIC_URL +  '/svg/business_black_24dp.svg';

export const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-item">
        <div className="navigation-item-icon">
          <img src={iconPath} alt="icon"/>
        </div>
        <div className="navigation-item-label">Klienci</div>
      </div>

      <div className="navigation-item">
        <div className="navigation-item-icon">
        <img src={iconPath} alt="icon" />
        </div>
        <div className="navigation-item-label">Klienci</div>
      </div>

      <div className="navigation-item">
        <div className="navigation-item-icon">
        <img src={iconPath} alt="icon" />
        </div>
        <div className="navigation-item-label">Klienci</div>
      </div>

      <div className="navigation-item">
        <div className="navigation-item-icon">
        <img src={iconPath} alt="icon" />
        </div>
        <div className="navigation-item-label">Klienci</div>
      </div>
    </div>
  )
}

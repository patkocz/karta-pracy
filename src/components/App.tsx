import React from 'react';
import Header from './Header/Header';
import { Navigation } from './Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <div className="worksheets">
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
        <div className="worksheets-card"></div>
      </div>
    </div>
  );
}

export default App;

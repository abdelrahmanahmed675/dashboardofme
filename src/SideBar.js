import React from 'react';
import './SideBar.css';

function SideBar({ isDarkMode, isHidden  }) {
  return (
    <div className={`sidebar ${isDarkMode ? 'darks' : ''} ${isHidden ? 'hidden' : ''}`}>
      <ul className='side-list'>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
}

export default SideBar;
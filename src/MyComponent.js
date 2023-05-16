import React, { useState } from 'react';
import { faBell, faEnvelope, faExpand, faSun, faMoon, faCompress, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function NavBar({ isDarkMode, toggleTheme, toggleSideBar }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
  };

  return (
    <div className={`navbar ${isDarkMode ? 'darks' : ''}`}>
      <div className="left-icons">
        <FontAwesomeIcon icon={faBars} onClick={toggleSideBar} />
        <span className="name">الشبراوي للرحلات</span>
      </div>
      <div className="right-icons">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} onClick={toggleFullScreen} />
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} onClick={toggleTheme} />
      </div>
    </div>
  );
}

export default NavBar;

import React, { useState, useEffect } from 'react';
import { faBell, faEnvelope, faExpand, faSun, faMoon, faCompress, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProSidebar } from 'react-pro-sidebar';
import './App.css';

function NavBar({ isDarkMode, toggleTheme }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
  };

  const handleSidebarToggle = () => {
    collapseSidebar();
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const current = document.getElementsByClassName("main")[0];

    if (current) {
      if (isCollapsed) {
        current.classList.add("mainHide");
      } else {
        current.classList.remove("mainHide");
      }
    }
  }, [isCollapsed]);

  return (
    <div className={`navbar ${isDarkMode ? 'darks' : ''}`}>
      <div className="left-icons">
        <FontAwesomeIcon icon={faBars} onClick={handleSidebarToggle} />
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

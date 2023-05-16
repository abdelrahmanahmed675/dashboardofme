import React from 'react';
//import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faFileAlt, faCog, faSignOutAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function SideBar({ isDarkMode, isHidden }) {
  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing local storage, resetting login state)
    localStorage.removeItem('Mytoken');
    localStorage.removeItem('loggedIn');
    // Navigate to the Login page
    window.location.href = '/Login'; // You can also use history.push('/Login') if using useHistory hook
  };

  return (
    <div className={`sidebar ${isDarkMode ? 'darks' : ''} ${isHidden ? 'hidden' : ''}`}>
      <ul className='side-list'>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
          <FontAwesomeIcon icon={faCar} className="icon" />
          كل السيارات
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
          <FontAwesomeIcon icon={faUser} className="icon" />
          Link 2
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          Link 3
        </li>
        <li>
          <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
          <FontAwesomeIcon icon={faCog} className="icon" />
          Link 4
        </li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

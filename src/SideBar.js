import React, {useState, useEffect} from 'react';
//import './SideBar.css';
import { Sidebar, Menu, MenuItem, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUser, faFileAlt, faCog, faSignOutAlt, faChevronLeft, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

function SideBar({ isDarkMode, isHidden }) {

  

  // const handleLogout = () => {
  //   // Perform logout actions here (e.g., clearing local storage, resetting login state)
  //   localStorage.removeItem('Mytoken');
  //   localStorage.removeItem('loggedIn');
  //   // Navigate to the Login page
  //   window.location.href = '/dashboardofme'; // You can also use history.push('/Login') if using useHistory hook
  // };



  return (
   
 <div style={{ display: 'flex', height: '100%' }}>
   <Sidebar
  rootStyles={{
    [`.${sidebarClasses.container}`]: {
      backgroundColor: '#202123',
    },
  }}

>
 <Menu
    menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#d359ff',
            backgroundColor: active ? '#000' : undefined,
            "&:hover":{
              backgroundColor:'transparent',
              color:'inherit'
            }
          };
      },
    }}
  >
    <MenuItem component={<Link to="/dashboardofme/Car" />}>
     <div style={{display:'flex',justifyContent:'space-between'}}>
            <FontAwesomeIcon icon={faCar} className="icon" />
            <span className="menu-item-label">All Cars</span>
            </div>
          </MenuItem>
          <MenuItem component={<Link to="/dashboardofme/drivers" />}>
           <div style={{display:'flex',justifyContent:'space-between'}}>
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span className="menu-item-label">Drivers</span>
            </div>
          </MenuItem>
          <MenuItem component={<Link to="/dashboardofme/followers" />}>
           <div style={{display:'flex',justifyContent:'space-between'}} className='item'>
            <FontAwesomeIcon icon={faArrowCircleUp} className="icon" />
            <span className="menu-item-label">Followers</span>
            </div>
          </MenuItem>
          <MenuItem component={<Link to="/dashboardofme/" />}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
            <span className="menu-item-label">Logout</span>
            </div>
          </MenuItem>
  </Menu>
</Sidebar>
</div>

    
  );
}

export default SideBar;

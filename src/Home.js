import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCar, faPlus} from  '@fortawesome/free-solid-svg-icons';
import NavBar from './MyComponent';
import SideBar from './SideBar';
//import SearchBox from './SearchBox';
//import Car from './Car';
// import { BrowserRouter as Router,
//  Routes, Route, Navigate } from 'react-router-dom';
import CarList from './CarList';
//import Playground from './Playground';
import './App.css';

function Car() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSideBarHidden, setIsSideBarHidden] = useState(false);
  
 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };



  
  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <div className="container">
        <div className="sidebar">
          <SideBar isDarkMode={isDarkMode} />
        {/*<Playgrond />*/}
        </div>
        
       <CarList isDarkMode={isDarkMode}/>

       </div>
    </div>
  );
}

export default Car;

import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCar, faPlus} from  '@fortawesome/free-solid-svg-icons';
import NavBar from './MyComponent';
import SideBar from './SideBar';
//import SearchBox from './SearchBox';
//import Car from './Car';
import { BrowserRouter as Router,
 Routes, Route, Navigate } from 'react-router-dom';
import CarList from './CarList';
import './App.css';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSideBarHidden, setIsSideBarHidden] = useState(false);
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSideBar = () => {
    setIsSideBarHidden(!isSideBarHidden);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://transportation.somee.com/api/Car/GetAllCars');
        const data = await resp.json();
        setCars(data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const filteredCars = cars.filter(car =>{
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme} toggleSideBar={toggleSideBar} />
      <div className="container">
        <div className="sidebar">
          <SideBar isDarkMode={isDarkMode} isHidden={isSideBarHidden} />
        </div>
        
       <CarList filteredCars={filteredCars} 
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}/>

       </div>
    </div>
  );
}

export default Home;

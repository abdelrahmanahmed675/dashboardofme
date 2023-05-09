import React, { useState, useEffect } from 'react';
import NavBar from './MyComponent';
import SideBar from './SideBar';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isSideBarHidden, setIsSideBarHidden] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

    const toggleSideBar = () => {
    setIsSideBarHidden(!isSideBarHidden);
  };


  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={` ${isDarkMode ? 'dark' : ''}`}>
      <NavBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}
       toggleSideBar={toggleSideBar}/>
       <div className={`content ${isDarkMode ? 'dark' : ''}`}>
        <SideBar isDarkMode={isDarkMode} isHidden={isSideBarHidden}
         style={{ marginLeft: isSideBarHidden ? '0' : '200px' }}/>
        <div className="main">
          <h1>Main Content</h1>
          <p>  Here is your main content and you should know your details yourself  </p>
        </div>
      </div>
      
    </div>
  );
}

export default App;

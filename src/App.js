import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
//import Home from './Home';
import Car from './Home';
import EditCar from './Car';


function App() {
  const bearerToken = localStorage.getItem('Mytoken');

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              bearerToken ? (
                <Navigate to="/dashboardofme/Car" replace={true} />
              ) : (
                <Navigate to="/dashboardofme" replace={true} />
              )
            }
          />
          <Route path="/dashboardofme" element={<Login />} />
          {/*<Route path="/dashboardofme/Home" element={<Home />} />*/}
          <Route path="/dashboardofme/Car" element={ <Car/>}/>
          <Route path="/dashboardofme/edit-car/:id" element={ <EditCar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

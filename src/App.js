import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import CarList from './CarList';

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
                <Navigate to="/Home" replace={true} />
              ) : (
                <Navigate to="/Login" replace={true} />
              )
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cars" element={ <CarList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

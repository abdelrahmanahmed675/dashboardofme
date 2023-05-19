import React, { useState, useEffect } from 'react';
//import Token from './Token';
//import Incorrect from './Incorrect';
//import { Link } from 'react-router-dom';
import styles from './Login.module.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  //const [incorrect, setIncorrect] = useState(false);
  //const [token, setToken] = useState('');

   
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  /*const handleRoleChange = (event) => {
    setRole(event.target.value);
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://transportation.somee.com/Api/User/Login?UserName=${username}&Password=${password}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });

      const response1 = await response.json();



      if (response.status === 200) {
        //setToken(data.token);
        //setLoggedIn(true);
        //setIncorrect(false);
         localStorage.setItem("Mytoken", response1.token);
        localStorage.setItem('loggedIn', 'true');
         window.location.href = '/dashboardofme/Car';
      } else if (response.status === 400) {
        setLoggedIn(false);
        //setIncorrect(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn'); // Check if the login state is stored

    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  /*if (loggedIn) {
    return <App />;
  }*/

  return (

    <div className={styles.gradient}>
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <label  className={styles.label}>
          اسم المستخدم:
          <input type="text" value={username}
           onChange={handleUsernameChange} 
             className={styles.input}
           />
        </label >
        <br />
        <label  className={styles.label}>
          كلمة المرور:
          <input type="password" value={password}
            className={styles.input}
           onChange={handlePasswordChange} 
           />
        </label>
        <br />
        <button type="submit"  className={styles.button}>Log In</button>
      </form>
    </div>
    </div>
  );
}

export default Login;

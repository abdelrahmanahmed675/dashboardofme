import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import Logo from './assets/logo2.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('Mytoken', data.token);
        setLoggedIn(true);
        setIncorrect(false);
        window.location.href = '/dashboardofme/Car';
      } else {
        setLoggedIn(false);
        setIncorrect(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    // Redirect to the dashboard or any authorized page
    window.location.href = '/dashboardofme/Car';
    // You may want to replace the above line with a React Router redirect
    // component to handle navigation within your application.
    return null;
  }

  return (
    <div className={styles.gradient}>
      <div className={styles.Logo}>
        <img src={Logo} alt='logo' />
      </div>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>
            اسم المستخدم:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className={styles.input}
            />
          </label>
          <br />
          <label className={styles.label}>
            كلمة المرور:
            <input
              type="password"
              value={password}
              className={styles.input}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit" className={styles.button}>Log In</button>
        
        {incorrect && <div className={styles.error}>Incorrect username or password.</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;

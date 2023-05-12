import React, { useState } from 'react';
import Token from './Token';
import Incorrect from './Incorrect';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [token, setToken] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://transportation.somee.com/Api/User/Login?
        UserName=${username}&Password=${password}&Role=${role}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setLoggedIn(true);
        setIncorrect(false);
      } else {
        setIncorrect(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loggedIn) {
    return <Token token={token}
     username={username} password={password} role={role} />;
  }

  if (incorrect) {
    return <Incorrect />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Role:
        <input type="text" value={role} onChange={handleRoleChange} />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;

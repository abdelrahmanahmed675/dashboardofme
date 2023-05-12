import React, { useEffect, useState } from 'react';
import App from './App';
import Incorrect from './Incorrect';

function Token(props) {
  const [token, setToken] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://transportation.somee.com/Api/User/Login?
          UserName=${props.username}&Password=${props.password}&Role=${props.role}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: props.username,
            password: props.password,
            role:props.role
          })
        });
        const data = await response.json();
        setToken(data.token);
        setIsValid(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.username, props.password, props.role]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isValid) {
    return (
      <div>
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
        <App />
      </div>
    );
  }

  return <Incorrect />;
}

export default Token;

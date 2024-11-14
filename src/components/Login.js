import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    
    fetch('http://localhost:3000/login')
      .then(response => response.json())
      .then(data => {
        const user = data.users.find(user => user.username === username && user.password === password);
        if (user) {
          setMessage('Login successful!');
        } else {
          setMessage('Invalid username or password.');
        }
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;


// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic to handle login, e.g., API call
    console.log('Login attempt:', { username, password });
    
    // Redirect to Find Care page after successful login
    navigate('/find-care'); // Using navigate instead of history.push()
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <p className="login-description">Please sign in to continue</p>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

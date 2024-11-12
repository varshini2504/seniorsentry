// src/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignUpPage.css';

function SignUpPage() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add logic to handle sign up, e.g., API call
    console.log('Sign Up attempt:', { username, email, password });
    
    // Redirect to Find Care page after successful signup
    navigate('/find-care'); // Using navigate instead of history.push()
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;

// src/GetStartedPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './GetStartedPage.css';

function GetStartedPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isNavigated, setIsNavigated] = useState(false); // State to track navigation

  const navigateToHome = () => {
    setIsNavigated(true); // Set state to true when navigating
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="get-started-container">
      <h1 className="large-title">SENIOR SENTRY</h1>
      <h2 className="subtitle">Bridging generations with care!</h2>
      {!isNavigated && ( // Only show button if not navigated
        <button className="get-started-button" onClick={navigateToHome}>
          Get Started
        </button>
      )}
    </div>
  );
}

export default GetStartedPage;

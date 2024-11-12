// src/FindCarePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './FindCarePage.css';

function FindCarePage() {
  const navigate = useNavigate(); // Initialize navigate

  const handleFindCare = () => {
    navigate('/care-needs'); // Redirect to CareNeedsPage
  };

  return (
    <div className="find-care-container">
      <h1 className="find-care-title">Find Care</h1>
      <p className="find-care-description">
        I need a caregiver. Start your free search for care in your area.
      </p>
      <button className="find-care-button" onClick={handleFindCare}>
        Find Care
      </button>
    </div>
  );
}

export default FindCarePage;

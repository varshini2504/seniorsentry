// src/ParentCareDescriptionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ParentCareDescriptionPage.css';

function ParentCareDescriptionPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    // Navigate to CareOptionsPage after submitting
    navigate('/care-options');
  };

  return (
    <div className="parent-care-description-container">
      <h1 className="parent-care-description-title">How would you describe your parent?</h1>
      <div className="parent-care-description-options">
        <label>
          <input type="radio" name="care-needs" value="independent" />
          Independent
        </label>
        <label>
          <input type="radio" name="care-needs" value="needs-monitoring" />
          Needs monitoring or extra help
        </label>
        <label>
          <input type="radio" name="care-needs" value="constant-supervision" />
          Requires constant supervision
        </label>
        <label>
          <input type="radio" name="care-needs" value="unsure" />
          I’m not sure
        </label>
      </div>
      <button className="parent-care-description-submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ParentCareDescriptionPage;

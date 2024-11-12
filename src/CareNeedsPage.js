// src/CareNeedsPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './CareNeedsPage.css';

function CareNeedsPage() {
  const [careRecipient, setCareRecipient] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    console.log('Care Needs Info:', { careRecipient, ageGroup });
    
    // Navigate to ParentCareDescriptionPage after submitting
    navigate('/parent-care-description'); // This is how you navigate in React Router v6
  };

  return (
    <div className="care-needs-page">
      <h2>Find trusted senior care near you</h2>
      <p>Let’s get started by learning more about your senior care needs</p>
      
      <form onSubmit={handleSubmit}>
        <h3>Who needs care?</h3>
        <label>
          <input
            type="radio"
            value="parent"
            checked={careRecipient === 'parent'}
            onChange={(e) => setCareRecipient(e.target.value)}
          />
          My parent
        </label>
        <label>
          <input
            type="radio"
            value="spouse"
            checked={careRecipient === 'spouse'}
            onChange={(e) => setCareRecipient(e.target.value)}
          />
          My spouse
        </label>
        <label>
          <input
            type="radio"
            value="myself"
            checked={careRecipient === 'myself'}
            onChange={(e) => setCareRecipient(e.target.value)}
          />
          Myself
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={careRecipient === 'other'}
            onChange={(e) => setCareRecipient(e.target.value)}
          />
          Other
        </label>

        <h3>How old are they?</h3>
        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
          <option value="">Select Age Group</option>
          <option value="50 to 60">50's</option>
          <option value="61 to 70">60's</option>
          <option value="71 to 80">70's</option>
          <option value="81 to 90">80's</option>
          <option value="90 plus">90+</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CareNeedsPage;

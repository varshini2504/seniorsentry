// src/LocationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationPage.css';

function LocationPage() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Location submitted:', location); // Log location for now
    navigate('/caretakers'); // Navigate to the CareTakersPage
  };

  return (
    <div className="location-page">
      <h2>Enter the Location of the Senior Citizen</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LocationPage;

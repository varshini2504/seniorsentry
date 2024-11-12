// src/CareOptionsPage.js
import React, { useState } from 'react';
import './CareOptionsPage.css';
import { useNavigate } from 'react-router-dom';

function CareOptionsPage() {
  const history = useNavigate(); // Hook to navigate to another page
  const [selectedOptions, setSelectedOptions] = useState([]);

  // List of care options
  const careOptions = [
    { id: 1, title: "Household tasks", description: "Errands, housekeeping, and meal prep." },
    { id: 2, title: "Personal care", description: "Bathing, dressing, and feeding." },
    { id: 3, title: "Companionship", description: "Sharing hobbies and lending an ear." },
    { id: 4, title: "Transportation", description: "Trips to appointments and errands." },
    { id: 5, title: "Specialized care", description: "Memory care, use of special equipment." },
    { id: 6, title: "Mobility assistance", description: "Lift, transfers, physical activity, etc." }
  ];

  // Toggle selection for a care option
  const toggleSelection = (id) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((option) => option !== id) : [...prev, id]
    );
  };

  // Navigate to the Location page
  const handleNext = () => {
    history('/location-page'); // Navigate to LocationPage
  };

  return (
    <div className="care-options-container">
      <h1 className="title">What kind of help are you looking for?</h1>
      <div className="care-options-list">
        {careOptions.map((option) => (
          <div
            key={option.id}
            className={`care-option ${selectedOptions.includes(option.id) ? 'selected' : ''}`}
            onClick={() => toggleSelection(option.id)} // Toggle selection
          >
            <h2 className="option-title">{option.title}</h2>
            <p className="option-description">{option.description}</p>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default CareOptionsPage;

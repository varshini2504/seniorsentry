// src/CaretakerProfilePage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use useNavigate to handle navigation
import './CaretakerProfilePage.css';

function CaretakerProfilePage() {
  const location = useLocation(); // Get data passed from CareTakersPage
  const navigate = useNavigate(); // Initialize useNavigate hook
  const caretaker = location.state?.caretaker; // Access the caretaker data from state

  // If caretaker data is missing, provide fallback values
  const caretakerDetails = caretaker || {
    name: 'No Name Available',
    description: 'No Description Available',
    experience: 'Experience details not available',
    specialties: 'Specialties details not available',
    availability: 'Availability details not available',
    contact: 'Contact details not available',
    isAvailable: false, // Fallback value for availability
  };

  // Function to navigate to the booking page
  const handleBooking = () => {
    navigate('/booking', { state: { caretaker } }); // Pass caretaker data to the booking page
  };

  return (
    <div className="caretaker-profile">
      <h2>{caretakerDetails.name}</h2>
      <p>{caretakerDetails.description}</p>
      <div className="profile-details">
        <p><strong>Experience:</strong> {caretakerDetails.experience}</p>
        <p><strong>Specialties:</strong> {caretakerDetails.specialties}</p>
        <p><strong>Availability:</strong> {caretakerDetails.availability}</p>
        <p><strong>Contact:</strong> {caretakerDetails.contact}</p>

        {/* Conditionally render the "Available" button if isAvailable is true */}
        {caretakerDetails.isAvailable && (
          <button className="available-button">Available</button>
        )}

        {/* Book Now button to navigate to the booking page */}
        <button className="book-now-button" onClick={handleBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default CaretakerProfilePage;

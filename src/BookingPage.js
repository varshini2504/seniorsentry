// src/BookingPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import necessary hooks
import './BookingPage.css';

function BookingPage() {
  const location = useLocation(); // Get the caretaker details passed from the profile page
  const navigate = useNavigate();
  const caretaker = location.state?.caretaker; // Access the selected caretaker data

  // A basic state for managing booking confirmation
  const [isBooked, setIsBooked] = useState(false);

  // Function to handle booking
  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      // Navigate to the GetStartedPage after booking confirmation
      navigate('/'); // Navigating to the GetStartedPage (root path)
    }, 5000); // Wait 5 seconds before navigating to the GetStartedPage
  };

  return (
    <div className="booking-page">
      <h2>Book a Caretaker</h2>
      <div className="booking-details">
        <h3>{caretaker?.name}</h3>
        <p><strong>Experience:</strong> {caretaker?.experience}</p>
        <p><strong>Specialties:</strong> {caretaker?.specialties}</p>
        <p><strong>Availability:</strong> {caretaker?.availability}</p>
        <p><strong>Contact:</strong> {caretaker?.contact}</p>

        {/* Book Now button */}
        {!isBooked ? (
          <button className="book-now-button" onClick={handleBooking}>
            Book!
          </button>
        ) : (
          <p>Your booking has been confirmed!</p>
        )}
      </div>
    </div>
  );
}

export default BookingPage;

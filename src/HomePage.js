// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate(); // Initialize navigate

  // Handlers for navigation
  const navigateToLogin = () => {
    navigate('/login'); // Navigate to Login page
  };

  const navigateToSignUp = () => {
    navigate('/signup'); // Navigate to SignUp page
  };

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="title">SENIOR SENTRY</h1>
        <p className="description">
          Our platform is more than just a service—it’s a heartfelt commitment to honoring the wisdom and dignity of seniors.
          We believe that every older adult deserves not just assistance but genuine companionship.
        </p>

        {/* Image Gallery */}
        <div className="image-gallery">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsReR-tQR421qGrag5a9jjgXPQXIr-dCKDQ&s" alt="Image 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhczJi94f9I8xAgG29RpBJCgMRHVDHMbe9g&s" alt="Image 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsi5Tf6bhlQU9lnapa4oJWFUDwt-SOhCf8A&s" alt="Image 3" />
        </div>

        {/* Navigation Buttons */}
        <div className="button-group">
          <button className="get-started-button" onClick={navigateToLogin}>
            Login
          </button>
          <button className="get-started-button" onClick={navigateToSignUp}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

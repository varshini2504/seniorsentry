// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter and Routes
import GetStartedPage from './GetStartedPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FindCarePage from './FindCarePage';
import CareNeedsPage from './CareNeedsPage';
import ParentCareDescriptionPage from './ParentCareDescriptionPage';
import CareOptionsPage from './CareOptionsPage';
import LocationPage from './LocationPage';
import CareTakersPage from './CareTakersPage';
import CaretakerProfilePage from './CaretakerProfilePage';
import BookingPage from './BookingPage'; // Import BookingPage

function App() {
  return (
    <Router>
      <Routes>
        {/* Define all routes here */}
        <Route path="/" element={<GetStartedPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/find-care" element={<FindCarePage />} />
        <Route path="/care-needs" element={<CareNeedsPage />} />
        <Route path="/parent-care-description" element={<ParentCareDescriptionPage />} />
        <Route path="/care-options" element={<CareOptionsPage />} />
        <Route path="/location-page" element={<LocationPage />} />
        <Route path="/caretakers" element={<CareTakersPage />} />
        <Route path="/caretaker-profile" element={<CaretakerProfilePage />} />
        <Route path="/booking" element={<BookingPage />} /> {/* Add the BookingPage route */}
        {/* Add any other necessary routes */}
      </Routes>
    </Router>
  );
}

export default App;

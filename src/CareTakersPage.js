// src/CareTakersPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CareTakersPage.css';

function CareTakersPage() {
  const history = useNavigate(); // Initialize useNavigate hook

  // Added more caretakers with detailed information
  const caretakers = [
    {
      name: 'Mrs. Meenu',
      description: 'Experienced caregiver with 5 years of experience in senior care.',
      experience: '5 years in senior care',
      specialties: 'Companionship, medication management, light housekeeping',
      availability: 'Available Monday to Friday, 9am - 6pm',
      contact: '+91 6369028203',
      id: 1,
    },
    {
      name: 'Mr. Kamalesh',
      description: 'Certified nursing assistant with expertise in elder companionship.',
      experience: 'Certified nursing assistant with 7 years of experience',
      specialties: 'Elder companionship, medical care assistance, transportation',
      availability: 'Available 24/7',
      contact: '+91 7894561230',
      id: 2,
    },
    {
      name: 'Ms. Priya',
      description: 'Specializes in physical therapy and rehabilitation for seniors.',
      experience: '10 years specializing in physical therapy for seniors',
      specialties: 'Physical rehabilitation, post-surgery recovery, mobility assistance',
      availability: 'Available Monday to Saturday, 8am - 4pm',
      contact: '+91 9123456789',
      id: 3,
    },
    {
      name: 'Mr. Raj',
      description: 'Compassionate caregiver with over 10 years of experience in managing chronic illnesses.',
      experience: '10+ years caring for seniors with chronic illnesses',
      specialties: 'Chronic illness management, medication administration, patient mobility support',
      availability: 'Available Monday to Friday, 10am - 7pm',
      contact: '+91 9988776655',
      id: 4,
    },
    {
      name: 'Mrs. Suman',
      description: 'Well-versed in dementia care and providing companionship for seniors.',
      experience: '7 years in dementia and Alzheimer\'s care',
      specialties: 'Dementia care, companionship, daily activity assistance',
      availability: 'Available Monday to Sunday, 8am - 8pm',
      contact: '+91 9823456789',
      id: 5,
    },
  ];

  // Function to navigate to the CaretakerProfilePage and pass caretaker data
  const viewProfile = (caretaker) => {
    history('/caretaker-profile', { state: { caretaker } }); // Navigate and pass caretaker data in the state
  };

  return (
    <div className="caretakers-page">
      <h2>Caretakers Available</h2>
      <div className="caretaker-list">
        {caretakers.map((caretaker) => (
          <div key={caretaker.id} className="caretaker-item" onClick={() => viewProfile(caretaker)}>
            <h3>{caretaker.name}</h3>
            <p>{caretaker.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareTakersPage;

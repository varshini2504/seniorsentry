import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Care for Your Loved Ones, Even When You Can’t Be There
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Find trusted caretakers for your senior family members with ease.
          </p>
          <a
            href="#book-now"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <input
            type="text"
            placeholder="Search for caretakers by location, availability, or specialties..."
            className="w-full sm:w-1/2 md:w-1/3 p-4 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20" id="how-it-works">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">1. Find a Caretaker</h3>
              <p className="text-gray-600">
                Browse a list of qualified and trusted caregivers near you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">2. Book a Session</h3>
              <p className="text-gray-600">
                Select a caregiver, choose your preferred time, and confirm the booking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">3. Caregiver Arrives</h3>
              <p className="text-gray-600">
                Your caregiver will arrive on time and provide the necessary care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What Our Clients Say</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-600 mb-4">
                "The best decision I ever made! Our caretaker was reliable and loving. Highly recommend."
              </p>
              <p className="font-semibold">Jane D.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-600 mb-4">
                "Incredibly caring and professional. My mother was treated like family."
              </p>
              <p className="font-semibold">John P.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-600 mb-4">
                "We feel safe knowing our father is in good hands with his caregiver."
              </p>
              <p className="font-semibold">Sarah T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-12" id="book-now">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <a
            href="#"
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            Find a Caregiver Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

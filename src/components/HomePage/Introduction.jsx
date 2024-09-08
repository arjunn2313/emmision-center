import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="container mx-auto text-center space-y-12">
        {/* Title with Animation */}
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-gray-900 transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
          Who We Are
        </h2>
        {/* Description with Animation */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
          Our Emission Test Center is dedicated to ensuring the safety and environmental health of our community. With advanced testing equipment and certified professionals, we provide comprehensive emission testing services for cars, trucks, and commercial vehicles.
        </p>
        {/* Buttons with Hover Effects and Animation */}
        <div className="flex justify-center gap-6">
          <Link
            to="/booking"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-105"
          >
            Book a Test
          </Link>
          <Link
            to="/services"
            className="bg-white border-2 border-gray-600 text-gray-800 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;


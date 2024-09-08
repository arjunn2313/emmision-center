 import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-8">
          Our Emission Test Center is dedicated to ensuring the safety and environmental health of our community. With advanced testing equipment and certified professionals, we provide comprehensive emission testing services for cars, trucks, and commercial vehicles.
        </p>
        <div className="space-x-4">
          <Link to="/booking" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Book a Test</Link>
          <Link to="/services" className="bg-transparent border border-gray-700 px-6 py-3 rounded text-gray-700 hover:bg-gray-700 hover:text-white transition">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

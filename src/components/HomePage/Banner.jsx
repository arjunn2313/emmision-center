import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner.webp';

const Banner = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white text-center p-8">
        {/* Animation for Banner Text */}
        <h1 className="text-6xl font-extrabold mb-4 animate-fadeIn font-poppins">
          Welcome to Our Emission Test Center
        </h1>
        <p className="text-xl mb-8 animate-fadeIn font-light font-poppins">
          Providing accurate and reliable emission tests for all types of vehicles.
        </p>
        {/* Button Styles and Hover Effects */}
        <div className="space-x-4">
          <Link
            to="/booking"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Book a Test
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;


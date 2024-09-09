 // Pages/Success.js
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaHome } from "react-icons/fa";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Icon */}
      <FaCheckCircle className="text-teal-600 text-6xl md:text-8xl mb-4 animate-bounce" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-teal-600 mb-4">
        Thank You!
      </h1>

      {/* Message */}
      <p className="text-gray-600 text-md md:text-xl mb-8 text-center">
        Your message has been successfully submitted. We will get back to you
        soon!
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
      >
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default Success;

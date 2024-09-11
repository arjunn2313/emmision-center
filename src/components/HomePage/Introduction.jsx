import React from "react";
import { Link } from "react-router-dom";
import introductionImage from "../../assets/vintage.png";

const Introduction = () => {
  return (
    <section className="sm:py-32 px-8 bg-neutral   ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between sm:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={introductionImage}
            alt="Emission Testing"
            className="w-full sm:h-96 object-cover transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-12">
          {/* Title with Animation */}
          <h2 className="text-2xl sm:text-5xl font-extrabold text-primary transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
            Who We Are
          </h2>
          {/* Description with Animation */}
          <p className="text-md md:text-xl text-gray-600 leading-relaxed transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
            Our Emission Test Center is dedicated to ensuring the safety and
            environmental health of our community. With advanced testing
            equipment and certified professionals, we provide comprehensive
            emission testing services for cars, trucks, and commercial vehicles.
          </p>
          {/* Buttons with Hover Effects and Animation */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
            <Link
              to="/booking"
              className="bg-primary text-white px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Book a Test
            </Link>
            <Link
              to="/services"
              className="bg-white border-2 border-text text-text px-8 py-4 rounded-lg shadow-lg hover:bg-neutral hover:text-text transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

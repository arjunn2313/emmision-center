import React from "react";
import { Link } from "react-router-dom";
// import introductionImage from './assets/introduction-image.jpg'; / 
import introductionImage from '../../assets/vintage.png';  

const Introduction = () => {
  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={introductionImage}
            // src="https://img.freepik.com/free-psd/vintage-car-isolated_23-2151504460.jpg?t=st=1725862519~exp=1725866119~hmac=ffabfbc91d54752cdb8f471314ccb317e55d15e35c97874f75e5c23d616b9db4&w=740"
            // src="https://img.freepik.com/free-photo/man-try-fix-car-engine-problem-local-road_1150-10665.jpg?t=st=1725855506~exp=1725859106~hmac=a18d5f8f08a44a99fa8f3fec69eb7adf5b0a64e1eedf442087eeda34c04c4df6&w=996"
            alt="Emission Testing"
            className="w-full h-96 object-cover   transform transition duration-500 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-12">
          {/* Title with Animation */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
            Who We Are
          </h2>
          {/* Description with Animation */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed transition-transform transform duration-700 ease-in-out translate-y-4 animate-fade-in-up">
            Our Emission Test Center is dedicated to ensuring the safety and
            environmental health of our community. With advanced testing
            equipment and certified professionals, we provide comprehensive
            emission testing services for cars, trucks, and commercial vehicles.
          </p>
          {/* Buttons with Hover Effects and Animation */}
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
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
      </div>
    </section>
  );
};

export default Introduction;

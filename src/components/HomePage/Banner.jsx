import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../../assets/car.png";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-teal-50 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6 sm:space-y-10">
        <h1 className="text-2xl     md:text-5xl font-bold text-charcoal-gray mb-4 animate-fadeInUp">
          Welcome to
        </h1>
        <h1 className="text-teal-800 text-4xl  t   md:text-7xl font-bold text-charcoal-gray mb-4 animate-fadeInUp">
          Brand Name
        </h1>
        <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-700 mb-6 animate-fadeInUp delay-100">
          Providing accurate and reliable emission tests for all types of
          vehicles.
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="bg-teal-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeInUp delay-200"
        >
           Book your test today <FaArrowRight className="inline ml-2" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="sm:mt-10 md:mt-0 md:w-1/2 animate-fadeInRight">
        <img
          src={HeroImage}
          alt="Emission Testing"
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner;

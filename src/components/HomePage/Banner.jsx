import React from "react";
import { FaCar, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaPercent, FaTag } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-primary to-secondary  ">
      <div className="container mx-auto flex flex-col lg:flex-row sm:gap-10 justify-evenly md:justify-center lg:justify-between items-center h-full px-6 lg:px-16">
        {/* Left: Text */}
        <div className="text-white space-y-3 md:space-y-6 sm:mt-12 lg:mt-0 lg:w-1/2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold">
            Ensure Clean Air with Professional Emission Testing
          </h1>
          <p className="text-sm md:text-xl text-neutral">
            Keep your vehicle compliant with emission standards. Our certified
            testing services ensure that vehicle contributes to a cleaner
            environment.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <button className="bg-white text-primary font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-100">
              Book a Test
            </button>
            <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-opacity-70">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Offer Badge */}

        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-center  ">
          <div className="border-2 border-red-400 relative w-52 h-52  md:w-96 md:h-96 bg-gradient-to-r from-purple-700   via-indigo-500   to-violet-600 shadow-lg rounded-xl p-4 flex flex-col justify-center items-center text-white text-center font-bold transform rotate-45">
            <div className="-rotate-45 flex flex-col text-center items-center">
              <FaCar className="text-yellow-300 sm:text-3xl mb-2 animate-bounce" />{" "}
              <span className="text-xs md:text-xl uppercase tracking-wider text-yellow-400">
                Emission Test
              </span>
              <span className="text-xl md:text-6xl mt-2 font-extrabold text-yellow-300">
                44%
              </span>
              <span className="text-xl md:text-4xl font-bold text-yellow-300">
                OFF
              </span>
              <FaCheckCircle className="text-green-500 text-2xl my-1" />
              <span className="text-sm sm:text-lg mt-2">
                <span className="text-gray-200">Was:</span>{" "}
                <span className="line-through text-gray-300">$25.00</span>
              </span>
              <span className="text-sm sm:text-2xl">
                <span className="text-gray-200">Now:</span>{" "}
                <span className="text-green-400 font-bold">$13.99</span>
              </span>
              <FaExclamationTriangle className="hidden sm:flex text-red-400 sm:text-xl mt-2 animate-pulse" />
              <span className="hidden sm:flex text-xs sm:text-lg uppercase text-red-400 tracking-wide animate-pulse font-bold">
                Limited Offer!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

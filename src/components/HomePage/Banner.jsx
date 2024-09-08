import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.webp";

const Banner = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635443.jpg?t=st=1725811641~exp=1725815241~hmac=c6270b4ab1948ce7303b1b413d669661be9f7a71057c3c7924cffdd15e179c58&w=1380')",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-white text-center p-6 md:p-12">
        {/* Animation for Banner Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn font-poppins">
          Welcome to Our Emission Test Center
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fadeIn font-light font-poppins">
          Providing accurate and reliable emission tests for all types of
          vehicles.
        </p>
        {/* Button Styles and Hover Effects */}
        <div className="space-x-4">
          <Link
            to="/booking"
            className="px-4 py-2 md:px-6 md:py-3 border text-white  shadow-lg transform hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            Book a Test
          </Link>
          <Link
            to="/services"
            className="px-4 py-2 md:px-6 md:py-3 border-2   bg-white text-black   hover:bg-transparent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

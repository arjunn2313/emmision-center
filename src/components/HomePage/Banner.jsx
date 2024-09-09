import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.webp";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../../assets/hero.png";

const Banner = () => {
  return (
    // <section
    //   className="relative h-screen bg-cover bg-center"
    //   style={{
    //     backgroundImage:
    //       "url('https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635443.jpg?t=st=1725811641~exp=1725815241~hmac=c6270b4ab1948ce7303b1b413d669661be9f7a71057c3c7924cffdd15e179c58&w=1380')",
    //   }}
    // >
    //   <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-white text-center p-6 md:p-12">
    //     {/* Animation for Banner Text */}
    //     <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn font-poppins">
    //       Welcome to Our Emission Test Center
    //     </h1>
    //     <p className="text-lg md:text-xl mb-6 animate-fadeIn font-light font-poppins">
    //       Providing accurate and reliable emission tests for all types of
    //       vehicles.
    //     </p>
    //     {/* Button Styles and Hover Effects */}
    //     <div className="space-x-4">
    //       <Link
    //         to="/booking"
    //         className="uppercase px-4 py-3 md:px-6 md:py-3 border text-white  shadow-lg transform hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
    //       >
    //         Book a Test
    //       </Link>
    //       <Link
    //         to="/services"
    //         className="uppercase  px-4 py-3 md:px-6 md:py-3 bg-white text-black  hover:border hover:bg-transparent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
    //       >
    //         Learn More
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <div className="h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 animate-fadeInUp">
          Welcome to Brand name
          </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fadeInUp delay-100">
          Providing accurate and reliable emission tests for all types of
          vehicles.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeInUp delay-200">
          Get Started <FaArrowRight className="inline ml-2" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 animate-fadeInRight">
        <img
          src={HeroImage}
          alt="Modern Furniture"
          className="w-full h-auto object-cover  transform transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Banner;

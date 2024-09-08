 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md border-b border-gray-200 font-poppins">
      <div className="container mx-auto flex sm:px-20 justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Emission Test Center</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors duration-300">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition-colors duration-300">Services</Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-blue-600 transition-colors duration-300">Book a Test</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl text-gray-800"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-30 right-0 w-3/4 bg-white text-gray-800 h-full md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 shadow-lg border-l border-gray-200`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-2xl text-gray-800"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center mt-16 space-y-6">
            <li>
              <Link to="/" className="text-2xl hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-2xl hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-2xl hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link to="/booking" className="text-2xl hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Book a Test</Link>
            </li>
            <li>
              <Link to="/contact" className="text-2xl hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



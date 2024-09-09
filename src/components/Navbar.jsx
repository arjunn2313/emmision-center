import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCogs,
  FaCalendarCheck,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-teal-50 text-dark-gray p-4 shadow-md border-light-gray font-poppins">
      <div className="container mx-auto flex sm:px-20 justify-between items-center">
        <h1
          className="text-2xl font-bold text-teal-600"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <NavLink to="/">Brand</NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li className="flex items-center space-x-2">
            <FaHome className="text-teal-600" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-teal-600"
                  : "text-dark-gray hover:text-teal-600 transition-colors duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <FaUser className="text-teal-600" />
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-teal-600"
                  : "text-dark-gray hover:text-teal-600 transition-colors duration-300"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <FaCogs className="text-teal-600" />
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-teal-600"
                  : "text-dark-gray hover:text-teal-600 transition-colors duration-300"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <FaCalendarCheck className="text-teal-600" />
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-teal-600"
                  : "text-dark-gray hover:text-teal-600 transition-colors duration-300"
              }
            >
              Schedule
            </NavLink>
          </li>
          <li className="flex items-center space-x-2">
            <FaPhone className="text-teal-600" />
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-teal-600"
                  : "text-dark-gray hover:text-teal-600 transition-colors duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl text-teal-600"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-30 right-0 w-full bg-white text-dark-gray h-full md:hidden transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 shadow-lg border-l border-light-gray`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-2xl text-teal-600 hover:text-teal-700 transition-colors duration-300"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-start mt-16 gap-10 w-1/2 mx-auto">
            <li className="flex items-center space-x-3">
              <FaHome className="text-2xl text-teal-600" />
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-teal-600 text-2xl "
                    : "text-2xl font-semibold text-dark-gray hover:text-teal-600 transition-colors duration-300"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <FaUser className="text-2xl text-teal-600 text-2xl " />
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-teal-600 text-2xl "
                    : "text-2xl font-semibold text-dark-gray hover:text-teal-600 transition-colors duration-300"
                }
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <FaCogs className="text-2xl text-teal-600" />
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-teal-600 text-2xl "
                    : "text-2xl font-semibold text-dark-gray hover:text-teal-600 transition-colors duration-300"
                }
                onClick={toggleMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <FaCalendarCheck className="text-2xl text-teal-600" />
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-teal-600 text-2xl "
                    : "text-2xl font-semibold text-dark-gray hover:text-teal-600 transition-colors duration-300"
                }
                onClick={toggleMenu}
              >
                Schedule
              </NavLink>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-2xl text-teal-600" />
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-teal-600 text-2xl"
                    : "text-2xl font-semibold text-dark-gray hover:text-teal-600 transition-colors duration-300"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

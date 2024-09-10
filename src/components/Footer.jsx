import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">
              <Link
                to="/"
                className="hover:text-teal-400 transition-colors duration-300"
              >
              Emission First LLC
              </Link>
            </h1>
            <p className="text-gray-300">
              Committed to ensuring the safety and environmental health of our
              community through advanced emission testing.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-12 mb-8 md:mb-0">
            <div className="flex flex-col mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/booking"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Book a Test
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" /> 1234 Elm
                  Street
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" /> City, State,
                  12345
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-primary mr-2" /> Email:{" "}
                  <a
                    href="mailto:info@example.com"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    info@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-2" /> Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-6">
          <p>&copy; 2024 Emission Test Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

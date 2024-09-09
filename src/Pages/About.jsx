import React from "react";
import { FaCar, FaCheckCircle, FaClock, FaHandsHelping, FaShieldAlt, FaStar, FaTools } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-28">
      {/* Section 1: History & Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our History & Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Established in 2020, our Emission Test Center was founded with a
            mission to ensure a cleaner and healthier environment. Our team of
            experts is dedicated to providing accurate and reliable emission
            testing services to meet the highest environmental standards.
          </p>
          <p className="text-lg text-gray-700">
            Our goal is to help vehicle owners comply with emission regulations
            and contribute to reducing air pollution in our community.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6">
          <img
            src="https://img.freepik.com/free-photo/smiling-mechanic-works-with-digital-tablet-repair-car_1150-18191.jpg"
            alt="Our History & Mission"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Section 2: Statistics */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="bg-white shadow-lg rounded-xl border border-teal-300 p-6 transition-transform transform hover:scale-105">
        <FaClock className="text-4xl text-teal-600 mb-4 mx-auto" />
        <h3 className="text-2xl font-bold text-gray-900">4+</h3>
        <p className="text-sm text-gray-600">Years of Service</p>
      </div>
      <div className="bg-white shadow-lg rounded-xl border border-teal-300 p-6 transition-transform transform hover:scale-105">
        <FaCheckCircle className="text-4xl text-teal-600 mb-4 mx-auto" />
        <h3 className="text-2xl font-bold text-gray-900">1,000+</h3>
        <p className="text-sm text-gray-600">Tests Completed</p>
      </div>
      <div className="bg-white shadow-lg rounded-xl border border-teal-300 p-6 transition-transform transform hover:scale-105">
        <FaTools className="text-4xl text-teal-600 mb-4 mx-auto" />
        <h3 className="text-2xl font-bold text-gray-900">50+</h3>
        <p className="text-sm text-gray-600">Certified Technicians</p>
      </div>
      <div className="bg-white shadow-lg rounded-xl border border-teal-300 p-6 transition-transform transform hover:scale-105">
        <FaStar className="text-4xl text-teal-600 mb-4 mx-auto" />
        <h3 className="text-2xl font-bold text-gray-900">100%</h3>
        <p className="text-sm text-gray-600">Customer Satisfaction</p>
      </div>
    </section>

      {/* Section 3: Meet the Team */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of a team member */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaCar className="text-4xl text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-600">Lead Technician</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaHandsHelping className="text-4xl text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
            <p className="text-sm text-gray-600">Customer Service Manager</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <FaShieldAlt className="text-4xl text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Robert Brown</h3>
            <p className="text-sm text-gray-600">Compliance Officer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

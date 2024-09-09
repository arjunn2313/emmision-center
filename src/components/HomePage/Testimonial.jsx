import React from "react";
import { FaLeaf, FaCheckCircle, FaHeartbeat } from "react-icons/fa";

const WhyTestingEssential = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-900 transition-transform transform duration-700 ease-in-out opacity-0 translate-y-4 animate-fade-in-up">
          Why Emission Testing is Essential
        </h2>
        <p className="text-xl text-gray-700 mb-16 transition-transform transform duration-700 ease-in-out opacity-0 translate-y-4 animate-fade-in-up">
          Emission testing is crucial for maintaining air quality, reducing
          pollution, and ensuring that vehicles meet environmental standards.
          Regular testing helps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg border border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-4xl text-green-600 mb-6">
              <FaLeaf />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Improve Air Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              By testing and maintaining vehicle emissions, we can significantly
              reduce harmful pollutants in the atmosphere.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-4xl text-blue-600 mb-6">
              <FaCheckCircle />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Ensure Vehicle Compliance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure that your vehicle meets the required emission standards,
              avoiding fines and penalties.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border border-blue-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
            <div className="text-4xl text-red-600 mb-6">
              <FaHeartbeat />
            </div>
            <h3 className="text-3xl font-semibold mb-4 text-gray-900">
              Protect Public Health
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lower emissions contribute to a healthier environment and reduce
              risks of respiratory and cardiovascular diseases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTestingEssential;

import React from "react";
import { FaLeaf, FaCheckCircle, FaHeartbeat } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: <FaLeaf className="text-green-600" />,
    title: "Improve Air Quality",
    description:
      "By testing and maintaining vehicle emissions, we can significantly reduce harmful pollutants in the atmosphere.",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-blue-600" />,
    title: "Ensure Vehicle Compliance",
    description:
      "Ensure that your vehicle meets the required emission standards, avoiding fines and penalties.",
  },
  {
    id: 3,
    icon: <FaHeartbeat className="text-red-600" />,
    title: "Protect Public Health",
    description:
      "Lower emissions contribute to a healthier environment and reduce risks of respiratory and cardiovascular diseases.",
  },
];

const WhyTestingEssential = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-5xl font-extrabold mb-12 text-teal-900 transition-transform transform duration-700 ease-in-out opacity-0 translate-y-4 animate-fade-in-up">
          Why Emission Testing is Essential
        </h2>
        <p className="text-md md:text-xl text-gray-600 mb-16 transition-transform transform duration-700 ease-in-out opacity-0 translate-y-4 animate-fade-in-up">
          Emission testing is crucial for maintaining air quality, reducing
          pollution, and ensuring that vehicles meet environmental standards.
          Regular testing helps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="bg-white p-8 rounded-lg border border-teal-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="text-xl sm:text-3xl font-semibold mb-4 text-teal-700">
                {card.title}
              </h3>
              <p className="text-md sm:text-lg text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTestingEssential;

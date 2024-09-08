// src/components/WhyTestingEssential.tsx

import React from 'react';

const WhyTestingEssential = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Emission Testing is Essential</h2>
        <p className="text-lg text-gray-700 mb-8">
          Emission testing is crucial for maintaining air quality, reducing pollution, and ensuring that vehicles meet environmental standards. Regular testing helps:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Improve Air Quality</h3>
            <p>
              By testing and maintaining vehicle emissions, we can significantly reduce harmful pollutants in the atmosphere.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Ensure Vehicle Compliance</h3>
            <p>
              Ensure that your vehicle meets the required emission standards, avoiding fines and penalties.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Protect Public Health</h3>
            <p>
              Lower emissions contribute to a healthier environment and reduce risks of respiratory and cardiovascular diseases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTestingEssential;

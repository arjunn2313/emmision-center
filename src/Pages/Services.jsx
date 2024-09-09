import React from 'react';
import { FaCar, FaTruck, FaFileAlt, FaProcedures } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Section 1: Service Descriptions */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-teal-900 mb-6 text-center">Our Emission Testing Services</h2>
        
        {/* Gasoline Emission Test */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6 border border-gray-200 hover:border-teal-500 transition-all duration-300">
          <div className="flex items-center mb-4">
            <FaCar className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">Gasoline Emission Test</h3>
          </div>
          <p className="text-md sm:text-lg text-gray-700">
            Our gasoline emission test ensures that your vehicle complies with environmental regulations by measuring the amount of pollutants emitted. This test is mandatory for most vehicles and helps in maintaining cleaner air and minimizing harmful emissions.
          </p>
        </div>

        {/* Diesel Emission Test */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:border-teal-500 transition-all duration-300">
          <div className="flex items-center mb-4">
            <FaTruck className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">Diesel Emission Test</h3>
          </div>
          <p className="text-md sm:text-lg text-gray-700">
            Diesel vehicles are subject to stringent emission standards. Our diesel emission test measures pollutants such as nitrogen oxides (NOx) and particulate matter, ensuring that your diesel vehicle operates within legal and environmental guidelines.
          </p>
        </div>
      </section>

      {/* Section 2: Testing Procedure */}
      <section>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Testing Procedure</h2>
        
        <div className="bg-teal-100 rounded-xl p-6 mb-8 border border-gray-200 hover:border-teal-500 transition-all duration-300">
          <div className="flex items-center mb-4">
            <FaProcedures className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">How the Testing Works</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            The emission testing procedure involves a thorough check of your vehicle’s exhaust system to measure the levels of pollutants it releases. We use state-of-the-art equipment to ensure precise measurements and compliance with environmental standards.
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li className="mb-2">Step 1: Schedule an appointment for your emission test.</li>
            <li className="mb-2">Step 2: Bring your vehicle and required documents to the testing center.</li>
            <li className="mb-2">Step 3: Our technicians will run a series of tests on your vehicle's exhaust emissions.</li>
            <li>Step 4: Once testing is complete, you’ll receive a report with the results and any necessary next steps.</li>
          </ul>
        </div>

        <div className="bg-teal-100 rounded-xl p-6 border border-gray-200 hover:border-teal-500 transition-all duration-300">
          <div className="flex items-center mb-4">
            <FaFileAlt className="text-4xl text-teal-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
          </div>
          <p className="text-lg text-gray-700">
            To ensure a smooth testing process, please bring the following documents:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 mt-4">
            <li className="mb-2">Vehicle Registration Certificate (RC)</li>
            <li className="mb-2">Insurance Document</li>
            <li className="mb-2">Previous Emission Test Report (if available)</li>
            <li>Government-issued ID (Driver’s License, Passport, etc.)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;

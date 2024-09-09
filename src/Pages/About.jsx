import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section 1: History & Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History & Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Kawruh was founded by Robert Anderson, a passionate lifelong learner, and Maria Sanchez, a visionary educator. 
            Their dream was to create a digital haven of knowledge accessible to all. United by their belief in the 
            transformational power of education, they launched Kawruh to revolutionize how we learn. Today, we stand at the 
            forefront of global learning transformation.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to use our innovative platform to create a global learning hub for eager learners, connecting them 
            with the best educators, tools, and resources worldwide.
          </p>
        </div>
        <div className="bg-blue-100 rounded-xl p-6">
          <img 
            src="https://img.freepik.com/free-vector/white-hatchback-car-isolated-white-vector_53876-67409.jpg?semt=ais_hybrid" 
            alt="Our History & Mission" 
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Section 2: Statistics */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-white shadow-lg rounded-xl py-6">
          <h3 className="text-2xl font-bold text-gray-900">3.5</h3>
          <p className="text-sm text-gray-600">Years Experience</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl py-6">
          <h3 className="text-2xl font-bold text-gray-900">23</h3>
          <p className="text-sm text-gray-600">Project Challenges</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl py-6">
          <h3 className="text-2xl font-bold text-gray-900">830+</h3>
          <p className="text-sm text-gray-600">Project Hours</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl py-6">
          <h3 className="text-2xl font-bold text-gray-900">100K</h3>
          <p className="text-sm text-gray-600">Trusted Students</p>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example of a team member */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">Robert Anderson</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Team Member" 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900">Maria Sanchez</h3>
            <p className="text-sm text-gray-600">Co-Founder & COO</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

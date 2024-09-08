 
import React from 'react';
import Banner from '../components/HomePage/Banner';
import Introduction from '../components/HomePage/Introduction';
import WhyTestingEssential from '../components/HomePage/Testimonial';
 

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <WhyTestingEssential />
    </div>
  );
};

export default Homepage;

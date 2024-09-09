 
import React from 'react';
import Banner from '../components/HomePage/Banner';
import Introduction from '../components/HomePage/Introduction';
import WhyTestingEssential from '../components/HomePage/Testimonial';
import Contact from './Contact';
 

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <WhyTestingEssential />
      <Contact/>
    </div>
  );
};

export default Homepage;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import Homepage from './Pages/HomePage';
 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} /> */}
          <Route path="/contact" element={<Contact />} />  
      </Routes>
    </div>
  );
};

export default App;


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./Pages/About";
import Services from "./Pages/Services";
import BookingForm from "./Pages/BookingForm";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/7994202313?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."  
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce" // Added bounce animation
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default App;

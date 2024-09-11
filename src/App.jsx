import React, { useState, useEffect } from "react";
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
import Loading from "./components/Loading"; // Import Loading component
import Success from "./components/Success";

const App = () => {
  const [loading, setLoading] = useState(true); // Add state for loading

  // Simulate a loading time of 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen if still loading
  }

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
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/14706690240?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default App;

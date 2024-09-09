import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./Pages/About";
import Services from "./Pages/Services";
import BookingForm from "./Pages/BookingForm";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

const App = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev); // Toggle the visibility every 3 seconds
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
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
  href="https://wa.me/7994202313?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." // Custom message
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-bounce" // Added bounce animation
>
  <FaWhatsapp className="text-3xl" />
</a>
 

      {/* <a
        href="https://wa.me/7994202313?text=Hello!%20I'm%20interested%20in%20making%20a%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 flex items-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp className="text-3xl mr-2 animate-bounce" />
        {showText && ( // Show or hide the text based on the state
          <span className="text-lg font-semibold">Book Appointment</span>
        )}
      </a> */}
    </div>
  );
};

export default App;

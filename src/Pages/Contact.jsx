import React from "react";
import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaUser,
  FaEdit,
} from "react-icons/fa";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:gap-12 p-4 sm:p-8 md:p-16 w-full md:w-4/5 lg:w-9/10 mx-auto">
      {/* Contact Information Section */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="text-2xl sm:text-5xl font-semibold mb-6 text-gray-900">
          Reach Out to Us
        </h2>
        <p className="text-gray-600 mb-6">
          For inquiries about our services, feel free to get in touch. We're
          here to assist you with any questions you may have.
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-3xl text-blue-500" />
            <div>
              <h4 className="font-bold text-gray-800">Address</h4>
              <p className="text-gray-600">
                236 5th SE Avenue, New York, NY 10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-3xl text-pink-500" />
            <div>
              <h4 className="font-bold text-gray-800">Phone</h4>
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
              <p className="text-gray-600">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaClock className="text-3xl text-orange-500" />
            <div>
              <h4 className="font-bold text-gray-800">Working Hours</h4>
              <p className="text-gray-600">Monday-Friday: 9:00 AM - 10:00 PM</p>
              <p className="text-gray-600">
                Saturday-Sunday: 9:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-8">
          <h4 className="font-bold text-gray-800 mb-2">Find Us on the Map</h4>
          <iframe
            title="Google Map"
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.007583346!2d-74.2598736871944!3d40.69767006467269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6b8a017622f%3A0xf048d0a8f91dd91e!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1625689031923!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full md:w-2/3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="name"
            >
              <FaUser className="text-xl text-teal-600 mr-2" />
              Your Name
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="email"
            >
              <FaEnvelope className="text-xl text-teal-600 mr-2" />
              Email Address
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="email"
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="subject"
            >
              <FaEdit className="text-xl text-teal-600 mr-2" />
              Subject
            </label>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="subject"
              type="text"
              placeholder="Optional"
              {...register("subject")}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2 flex items-center"
              htmlFor="message"
            >
              <FaEdit className="text-xl text-teal-600 mr-2" />
              Message
            </label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="message"
              rows="4"
              placeholder="Your message here..."
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disabling
  const navigate = useNavigate();

  // Get today's date in yyyy-mm-dd format
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbysEfm56LLxBIyGhmBLz8cJLjW7a38KPSwIk0QSGoXWVR1JfuF2O04MKzLqkR0emg8h/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      navigate("/success");
    } catch (err) {
      alert("Submission failed. Please try again.");
      setIsSubmitting(false); // Re-enable the button if submission fails
    }
  };

  // Basic validation for time
  const validateTime = (value) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!timeRegex.test(value)) return "Invalid time format";
    const [hours, minutes] = value.split(":").map(Number);
    if (
      hours < 10 ||
      (hours === 10 && minutes < 0) ||
      hours > 18 ||
      (hours === 18 && minutes > 0)
    ) {
      return "Time must be between 10:00 and 18:00";
    }
    return true;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl font-bold text-teal-900 mb-8 text-center">
            Book Your Emission Test
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 shadow-lg rounded-lg p-8 space-y-6"
          >
            {/* Section 1: Personal Details */}
            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personal Details
              </h3>

              {/* Name Input */}
              <div className="flex items-center mb-4">
                <FaUser className="text-2xl text-teal-600 mr-3" />
                <div className="flex-1">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className={`w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring focus:ring-teal-300 outline-none`}
                    placeholder="John Doe"
                    name="name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-teal-600 mr-3" />
                <div className="flex-1">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring focus:ring-teal-300 outline-none`}
                    placeholder="example@email.com"
                    name="email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      Please enter a valid email address
                    </span>
                  )}
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex items-center mb-4">
                <FaPhone className="text-2xl text-teal-600 mr-3" />
                <div className="flex-1">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: true,
                      pattern: /^[0-9]{10}$/,
                    })}
                    className={`w-full px-4 py-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring focus:ring-teal-300 outline-none`}
                    placeholder="1234567890"
                    name="phone"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">
                      Please enter a valid phone number
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Test Details */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Test Details
              </h3>

              {/* Preferred Date Input */}
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-2xl text-teal-600 mr-3" />
                <div className="flex-1">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Preferred Test Date
                  </label>
                  <input
                    type="date"
                    {...register("date", { required: true })}
                    min={today} // Set minimum date to today
                    className={`w-full px-4 py-2 border ${
                      errors.date ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring focus:ring-teal-300 outline-none`}
                    name="date"
                  />
                  {errors.date && (
                    <span className="text-red-500 text-sm">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              {/* Preferred Time Input */}
              <div className="flex items-center mb-4">
                <FaClock className="text-2xl text-teal-600 mr-3" />
                <div className="flex-1">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Preferred Test Time
                  </label>
                  <input
                    type="text"
                    {...register("time", {
                      required: true,
                      // validate: validateTime,
                    })}
                    placeholder="10:00 AM"
                    className={`w-full px-4 py-2 border ${
                      errors.time ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring focus:ring-teal-300 outline-none`}
                    name="time"
                  />
                  {errors.time && (
                    <span className="text-red-500 text-sm">
                      {errors.time.message}
                    </span>
                  )}
                  {/* Informing user about time slots and Sundays */}
                  <p className="text-gray-600 text-sm mt-2">
                    Please book a time slot between 10:00 AM and 6:00 PM.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Note: Sundays are holidays, please choose another day.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 rounded-lg transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Schedule Test"}
              </button>
            </div>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default BookingForm;

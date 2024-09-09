import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formRef = useRef(null); // Reference for the form

  const onSubmit = async (data, e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbysEfm56LLxBIyGhmBLz8cJLjW7a38KPSwIk0QSGoXWVR1JfuF2O04MKzLqkR0emg8h/exec",
        {
          method: "POST",
          body: new FormData(formRef.current), // Using FormData to send form data
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result); // Log the server's response
      alert(result.msg); // Display a message from the response (assumes response contains a 'msg' field)
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Schedule Your Emission Test
      </h2>

      <form
        ref={formRef} // Attach formRef to the form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Name Input */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
            placeholder="John Doe"
            name="name" // Add name attribute to match FormData keys
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
            placeholder="example@email.com"
            name="email" // Add name attribute
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              Please enter a valid email address
            </span>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
            className={`w-full px-4 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
            placeholder="1234567890"
            name="phone" // Add name attribute
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">
              Please enter a valid phone number
            </span>
          )}
        </div>

        {/* Preferred Date Input */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Preferred Test Date
          </label>
          <input
        
            type="date"
            {...register("date", { required: true })}
            className={`w-full px-4 py-2 border ${
              errors.date ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring focus:ring-blue-300`}
            name="date" // Add name attribute
          />
          {errors.date && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Schedule Test
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

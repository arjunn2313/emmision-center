// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9", // Purple
        secondary: "#4F46E5", // Indigo
        accent: "#F59E0B", // Yellow (for highlights or offers)
        neutral: "#F3F4F6", // Light Gray
        text: "#1F2937", // Dark Gray for text
      },
      gradientColorStops: {
        "primary-gradient": "#6D28D9", // Purple
        "secondary-gradient": "#4F46E5", // Indigo
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        fadeInRight: "fadeInRight 1s ease-out",
      },
    },
  },
  plugins: [],
};

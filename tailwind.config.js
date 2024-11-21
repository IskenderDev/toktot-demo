/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["'Comfortaa'"], 
      },
      colors: {
        primary: "#1746A2", 
      },
    },
  },
  plugins: [],
};

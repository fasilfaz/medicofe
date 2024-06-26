/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECECEC",
        color: "#007E85",
      },
      boxShadow: {
        custom: "5px 5px 10px #ccc",
        hover: "10px 10px 20px #ccc"
      }
    },
  },
  plugins: [],
};
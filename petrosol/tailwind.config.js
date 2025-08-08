/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        primary: "#0D1B2A", // deep navy
        secondary: "#1B263B", // lighter navy
        accent: "#00B4D8", // teal
        light: "#F5F6FA",
        darkGray: "#4B5563"
      },
    },
  },
  plugins: [],
}

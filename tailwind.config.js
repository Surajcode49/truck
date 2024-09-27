/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode with the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding custom colors for light and dark themes
      colors: {
        lightBackground: '#f9fafb', // Light mode background
        darkBackground: '#000000',  // Dark mode background
        lightText: '#374151',       // Light mode text color
        darkText: '#d1d5db',        // Dark mode text color
        // Add more custom colors or styles here as needed
      },
      // You can extend other styling like border-radius, spacing, etc. 
    },
  },
  plugins: [],
}

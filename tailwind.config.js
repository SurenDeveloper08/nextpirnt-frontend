// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Primary Color
        primary: {
          DEFAULT: '#e63946',
          hover: '#c81d2b', // A slightly darker version for button hovers
          light: '#ffccd5', // Very light red for background accents
        },
        // Complementary Professional Colors
        secondary: '#1d3557', // Deep Navy
        accent: '#457b9d',    // Steel Blue
        surface: '#f8f9fa',   // Off-white/Gray
      },
    },
  },
  plugins: [],
}
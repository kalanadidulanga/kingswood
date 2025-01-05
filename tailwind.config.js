/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#af0c00",
        secondary: "#00FF00",
        background: "#000000",
      },
    },
  },
  plugins: [],
}
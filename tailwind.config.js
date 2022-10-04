/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

            fontFamily: {
              Cormorant: "'Cormorant Garamond', serif",
              Montserrat: "'Montserrat', sans-serif",
            },
            colors: {
              'regen-blue': '#0E5469',
              'regen-seablue': '#265F6F',
              'regen-sealighblue' : '#476677',
              'regen-lighblue': '#21B3D5',
            },

    },
    plugins: [],
  }
}
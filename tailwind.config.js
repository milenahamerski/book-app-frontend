/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        bone: '#D2D0BA', 
        sage: '#B6BE9C', 
        green: '#7B9E87', 
        blue: '#5E747F', 
      },
      fontFamily: {
        sans: ['Maven Pro', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

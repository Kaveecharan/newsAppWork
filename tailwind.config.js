/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00001a',
        'secondary-color': '#9999ff',
        'optional-color': '#b3b3ff',
      },
      fontFamily: {
        alkatra: ['Alkatra', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif']
      },
    }
  },
  plugins: [],
}
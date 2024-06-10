/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem',
        '27px' : '27px'
      },
      borderRadius: {
        '4xl': '4.8rem',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        quaternary: 'var(--color-quaternary)',
        quinary: 'var(--color-quinary)',
        senary: 'var(--color-senary)',
        septenary: 'var(--color-septenary)',
        octonary: 'var(--color-octonary)',
	      nonary: 'var(--color-nonary)',
      },
      height: {
        '95vh':'95vh',
        '97vh': '97vh', 
        '99.999vh' : '99.999vh',
      },

      width: {
        '46':'10.5rem',
        '19/20' : '95%',
        '97/100': '97%',
        '3/20':'15%',
        '17/20':'85%',
        '41/50':'84%'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
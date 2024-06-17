/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

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
        '27px': '27px'
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
        denary: 'var(--color-denary)'
      },
      height: {
        '95vh': '95vh',
        '97vh': '97vh',
        '99.999vh': '99.999vh',
      },
      width: {
        '22.5vh': '22.5vh',
        '46': '10.5rem',
        '19/20': '95%',
        '97/100': '97%',
        '3/20': '15%',
        '17/20': '85%',
        '41/50': '84%',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'h-md': { 'raw': '(min-height: 800px)' },  // Custom height breakpoint for min-height 800px
      'h-lg': { 'raw': '(min-height: 900px)' },  // Custom height breakpoint for min-height 900px
      'h-xl': { 'raw': '(min-height: 1000px)' }, // Custom height breakpoint for min-height 1000px
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* For Webkit-based browsers */
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      });
    }
  ],
}

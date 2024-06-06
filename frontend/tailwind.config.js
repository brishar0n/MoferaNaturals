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
                '97vh': '97vh', // Custom height value set to 90% of the viewport height
                '99.999vh': '99.999vh',
            },

            width: {
                '22.5vh': '22.5vh'
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
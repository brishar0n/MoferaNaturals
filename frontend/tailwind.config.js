/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    theme: {
        extend: {
            fontSize: {
                'xxs': '.625rem',
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
        },
    },
    plugins: [],
};

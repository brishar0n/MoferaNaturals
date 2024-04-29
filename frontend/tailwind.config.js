/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          borderRadius: {
            "4xl":"4.8rem"
          },
          colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            tertiary: 'var(--color-tertiary)',
            quaternary: 'var(--color-quaternary)',
            quinary: 'var(--color-quinary)',
            senary: 'var(--color-senary)',
          },
        },
      },
      plugins: [],
    };

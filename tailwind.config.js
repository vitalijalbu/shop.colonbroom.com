/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid", "./src/**/*.js"],
  theme: {
    extend: {
      screens: {
        sm: '680px',
        md: '800px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',
          sm: '0',
          lg: '1rem',
          xl: '2rem',
          '2xl': '2rem',
        },
      },
      colors:{
        primary: '#199a8e',
        red: '#FE5C5C',
        bg: '#EAF4F2',
        disabled: '#A1A8B0',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Fredoka': ['Fredoka', 'sans-serif'],
      },
      fontWeight: {
        bold: '700', // Make sure 'bold' corresponds to '700'
      },
      colors: {
        'zen-dark': 'rgba(255, 146, 9, 0.65)', // Replace the RGB values with your color's RGB and set the alpha to 0.6
        'zen-light': 'rgba(255, 255, 0, 0.6)', // Do the same for the second color
      },
      backgroundImage: theme => ({
        'zen-gradient': `linear-gradient(to bottom, ${theme('colors.zen-dark')} -20%, ${theme('colors.zen-light')} 85%)`,
      }),
    },
  },
  plugins: [],
}
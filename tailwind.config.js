module.exports = { // Use `export default` if your project setup supports it.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], // Changed 'Poppins' to lowercase 'poppins'
        'fredoka': ['Fredoka One', 'sans-serif'], // Changed 'Fredoka' to lowercase 'fredoka'
      },
      fontWeight: {
        'bold': '700', // Ensured 'bold' corresponds to '700'
      },
      colors: {
        'zen-dark': 'rgba(255, 146, 9, 0.65)',
        'zen-light': 'rgba(255, 255, 0, 0.6)',
      },
      backgroundImage: theme => ({
        'zen-gradient': `linear-gradient(to bottom, ${theme('colors.zen-dark')} 5%, ${theme('colors.zen-light')} 85%)`,
      }),
    },
  },
  plugins: [],
}

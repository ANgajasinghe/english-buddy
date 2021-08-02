module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins'],
        Josefin:['Josefin Sans'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

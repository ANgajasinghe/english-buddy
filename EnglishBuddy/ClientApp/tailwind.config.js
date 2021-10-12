module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        Josefin: ['Josefin Sans'],
        Nunito: ['Nunito Sans']
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-reduce']
    },
  },
  corePlugins: {
    // ...
    listStyleType: false,
    preflight: false,
  },
  plugins: [
      
  ],
}

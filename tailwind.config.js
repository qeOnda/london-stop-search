module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        one: '#F2F12D',
        two: '#E6B71E',
        three: '#CA8323',
        four: '#A25626',
        five: '#8B4225',
        six: '#723122',
      },
    },
  },
  variants: {
    extend: {    	
      backgroundColor: ['active'],
      fill: ['hover', 'focus'],      
    },
  },
  plugins: [],
}

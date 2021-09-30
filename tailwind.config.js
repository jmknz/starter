const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'media',
  theme: {
    colors,
    extend: {},
  },
  variants: {},
  plugins: [],
};

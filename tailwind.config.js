module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#97BF10',
        secondary: '#FFCF00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

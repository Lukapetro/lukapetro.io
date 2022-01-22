
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
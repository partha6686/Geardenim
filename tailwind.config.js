const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      cust_dark: "#272727",
      cust_green: "#50D890",
      cust_light: "#EFFFFB",
      cust_blue: "#4F98CA",
    },
  },
  plugins: [],
};
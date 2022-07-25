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
      cuse_light_green: "#B4FF9F",
      cust_light: "#f6f7fb",
      cust_blue: "#4F98CA",
      cust_light_text: "#5F7161",
      cust_grey: "#eaeaec",
      cust_white: "#fff",
    },
  },
  plugins: [],
};

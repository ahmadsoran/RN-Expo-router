const App = require("./app.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        [`${App.expo.name}-text`]: "#1A202C",
        [`${App.expo.name}-bg`]: "#F7FAFC",
        [`${App.expo.name}-active`]: "#f58724",
        dark: {
          [`${App.expo.name}-text`]: "#ffffffeb",
          [`${App.expo.name}-bg`]: "#171923",
          [`${App.expo.name}-active`]: "#F7A153",
        },
      },
    },
    fontFamily: {
      "Poppins-Regular": "Poppins-Regular",
      "Poppins-Medium": "Poppins-Medium",
      "Poppins-SemiBold": "Poppins-SemiBold",
      "Poppins-Bold": "Poppins-Bold",
      "Poppins-ExtraBold": "Poppins-ExtraBold",
      "Poppins-Black": "Poppins-Black",
      "Poppins-Thin": "Poppins-Thin",
      "Poppins-Light": "Poppins-Light",
    },
  },

  plugins: [],
};
// tailwind.config.js

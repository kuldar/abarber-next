const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        gold: {
          50: "#FFFFFF",
          100: "#FEFDFB",
          200: "#F4EDDD",
          300: "#EADDBE",
          400: "#E0CD9F",
          500: "#D6BD80",
          600: "#C8A756",
          700: "#9E7F33",
          800: "#6C5723",
          900: "#453816",
        },
      },
    },
    fontFamily: {
      prompt: ["'Prompt', sans-serif"],
      // montserrat: ["'Montserrat', sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

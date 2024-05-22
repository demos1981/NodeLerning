import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      secondary: {
        DEFAULT: colors.neutral[200],
        hover: colors.neutral[300],
        border: colors.neutral[400],
        text: colors.neutral[500],
        dark: colors.neutral[800],
        // ["dark-hover"]: colors.neutral[900],
      },
      primary: {
        DEFAULT: colors.gray[100],
        hover: colors.gray[300],
        border: colors.gray[500],
        text: colors.blue[800],
        dark: colors.blue[900],
        // ["dark-hover"]: colors.blue[900],
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

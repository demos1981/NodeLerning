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
      base: {
        blue: "#1fb6ff",
        white: "#ffffff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        darkGreen: "#249991",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      secondary: {
        DEFAULT: colors.neutral[200],
        hover: colors.neutral[300],
        border: colors.neutral[400],
        text: colors.neutral[500],
        dark: colors.neutral[800],
        // ["dark-hover"]: colors.neutral[900],
      },
      primary: {
        DEFAULT: colors.gray[500],
        hover: colors.gray[400],
        border: colors.gray[500],
        text: colors.gray[800],
        dark: colors.gray[900],
        //["dark-hover"]: colors.blue[900],
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
      margin: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
};

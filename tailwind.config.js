module.exports = {
  content: [
    "./**/*.php",
    "./src/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#17252A",
        blackLight: "#374E56",
        blackMedium: "#2C3D43",
        primary: "#F79007",
        primaryDark: "#cf7a0a",
        primaryHover: "#f77f07",
      },
    },
  },
  plugins: [],
};

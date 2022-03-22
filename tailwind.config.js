module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      // sans: ['Raleway', 'sans-serif'],
      // serif: ['Cinzel', 'serif'],
      mainFont: ["Cinzel", "serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "red",
        "secondary-bg": "#212121",
        "footer-bg": "#121212",
        yellow: "#EDAC2C",
        "yellow-light": "rgba(237, 172, 44, 0.3)",
      },
    },
  },
  plugins: [],
};

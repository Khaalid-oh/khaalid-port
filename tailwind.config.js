/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        //current: 'currentColor',
        white: "#ffffff",
        currentColor: "#000000",
        black: "#000000",
        primary: "#200937",
        pink: "#9C27B0",
        purple: "#3f3cbb",
        midnight: "#8D7192",
        darkk: "#200937",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      fontFamily: {
        inconsolota: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sxl: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      boxShadow: {
        custom: "0px 5px 30px 0px rgba(0, 0, 0, 0.1)",
        darkCustom: "0px 5px 30px 0px #A445ED",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

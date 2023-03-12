/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
      boxShadow: {
        custom: "0px 5px 30px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

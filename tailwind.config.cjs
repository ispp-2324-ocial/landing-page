/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "ocial-dark-blue": "#0e4781",
        "ocial-blue": "#3e80d7",
        "ocial-light-blue": "#aacfff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

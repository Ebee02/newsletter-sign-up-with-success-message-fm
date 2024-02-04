/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tomato-red": "#ff6257",
        "dark-slate-grey": "#242742",
        "charcoal-grey": "#36384e",
        "standard-grey": "#9294a0",
      },
    },
  },
  plugins: [],
};

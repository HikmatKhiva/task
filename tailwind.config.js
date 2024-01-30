/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["Aeonik", "sans-serif"],
        intern: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-blue": "#0a0812",
        "button-color": "#243bb933",
        "grey-200": "#BDC4D1",
        "grey-100": "#EFF1F6",
        "primary-blue": "#243BB9",
        "secondary-blue": "#3F57DA",
        // "button-hover-color": "#3F57DA",
        error: "#F04242",
      },
      screens: {
        "3xl": "2000px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};

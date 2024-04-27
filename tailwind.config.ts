import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      fontFamily: {
        base: ["Aeonik", "sans-serif"],
      },
      colors: {
        "primary-blue": "#243BB9",
        "secondary-blue": "#3F57DA",
        "primary-pink": "#BE6AA7",
        "primary-green": "#4DB29A",
        "primary-black": "#0A0812",
        "grey-200": "#BDC4D1",
        "grey-100": "#EFF1F6",
        error: "#F04242",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
export default config;

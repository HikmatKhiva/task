import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        aeonik: ["Aeonik", ...fontFamily.serif],
        Inter: ["Inter", ...fontFamily.serif],
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
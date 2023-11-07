import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Ubuntu", "Arial", "sans-serif"],
      },
      colors: {
        "o-1": "#F09A38",
        "o-2": "#EC7835",
        "o-3": "#A6501F",
        "o-4": "#5A2A0F",
        "o-5": "#371806",
        "w-1": "#FDFDFD",
        "w-2": "#CFD1D7",
        "w-3": "#63666F",
        "w-4": "#2C2E34",
        "w-5": "#17181C",
        "b-1": "#2455A2",
        "b-2": "#1D479B",
        "b-3": "#0F285C",
        "b-4": "#051330",
        "b-5": "#030A1B",
        "g-1": "#FF8800",
        "g-2": "#D77507",
        "g-3": "#885016",
        "s-1": "#D3DBF4",
        "s-2": "#232C46",
        "s-3": "#121628",
      },
    },
  },
  plugins: [],
};
export default config;

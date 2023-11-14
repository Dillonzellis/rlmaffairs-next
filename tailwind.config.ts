import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandingGold: {
          400: "#8e744b",
        },
        brandingGreen: {
          400: "#1B5B32",
        },
      },
    },
  },
  plugins: [],
};
export default config;

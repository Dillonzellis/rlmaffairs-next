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
          300: "#268046",
        },
        brandingBlue: {
          900: "#07111F",
        },
        brandingGrey: {
          400: "#BDB7B7",
        },
      },
    },
  },
  plugins: [],
};
export default config;

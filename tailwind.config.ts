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
          400: "var(--brandingGold-400)",
        },
        brandingGreen:{
          400: "var(--brandingGreen-400)",
        }
      },
    },
  },
  plugins: [],
};
export default config;

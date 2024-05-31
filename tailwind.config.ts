import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/*.handlebars",
  ],
  theme: {
    extend: {
      colors: {
        custom_yellow: "#F4D03F",
        custom_green: "#D2EC60",
        custom_blue_black: "#161D25"
      },
      boxShadow: {
        custom_shadow: "0 4px 4px 0 rgba(22, 29, 37, 0.25)",
      },
      screens: {
        "mobile": {max: "640px"},
        "tablet": {max: "1323px"}
      }
    },
  },
  plugins: [],
};
export default config;

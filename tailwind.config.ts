import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("dither-plugin")({
      palette: [[0, 0, 0], [255, 255, 255]],
      dithering: "atkinson",
      selector: ".dither",
      sizes: {
        sm: 1,
        DEFAULT: 4,
        lg: 6,
        xl: 8,
      },
    }),
  ],
};

export default config;


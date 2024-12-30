import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBackground: "#ffffff",
        lightForeground: "#c0c0c0",
        darkBackground: "#1e1e1e",
        darkForeground: "#333333",
      },
    },
  },
  plugins: [],
};

export default config;

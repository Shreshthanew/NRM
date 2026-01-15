import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // Note: Colors are now defined in globals.css using @theme directive (Tailwind v4)
  // This config file is kept for content paths and other non-color configurations
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
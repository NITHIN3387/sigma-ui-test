import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "btn-color": {
          50: "rgb(var(--btn-color) / 0.05)",
          100: "rgb(var(--btn-color) / 0.1)",
          200: "rgb(var(--btn-color) / 0.2)",
          300: "rgb(var(--btn-color) / 0.3)",
          400: "rgb(var(--btn-color) / 0.4)",
          500: "rgb(var(--btn-color) / 0.5)",
          600: "rgb(var(--btn-color) / 0.6)",
          700: "rgb(var(--btn-color) / 0.7)",
          800: "rgb(var(--btn-color) / 0.8)",
          900: "rgb(var(--btn-color) / 0.9)",
          1000: "rgb(var(--btn-color))"
        }
      }
    }
  },
  plugins: []
};
export default config;
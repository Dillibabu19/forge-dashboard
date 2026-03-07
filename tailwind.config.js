/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6367FF",
        secondary: "#8494FF",
        accent: "#C9BEFF",
        soft: "#FFDBFD",
      },
    },
  },
  plugins: [],
};

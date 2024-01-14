/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "768px" },
        mobile: { max: "425px" },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          lg: "1332px",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        accent: "#f4d35e",
        ocean: "#1b3a57",
        dusk: "#0f172a",
      },
      boxShadow: {
        glow: "0 15px 60px rgba(56, 189, 248, 0.2)",
      },
    },
  },
  plugins: [],
};

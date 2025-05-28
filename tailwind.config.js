/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "medical-blue": "#1E3A8A",
        "medical-green": "#10B981",
      },
      boxShadow: {
        neumorphic:
          "8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.9)",
      },
    },
  },
  plugins: [],
};

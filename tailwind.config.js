/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0f172a",
        neonPink: "#ff00ff",
        neonBlue: "#00ffff",
        neonPurple: "#8b5cf6",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neon: "0 0 30px rgba(255,0,255,0.35)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulse 8s infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
};

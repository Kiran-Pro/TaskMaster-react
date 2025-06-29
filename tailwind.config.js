/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        theme: {
          background: "var(--background)",
          surface: "var(--surface)",
          text: "var(--text)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          muted: "var(--muted)",
          border: "var(--border)",
          hover: "var(--hover)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "#f5f5f5",
          "--surface": "#ffffff",
          "--text": "#1e1e1e",
          "--primary": "#3b82f6",
          "--secondary": "#2563eb",
          "--muted": "#6b7280",
          "--border": "#d1d5db",
          "--hover": "#93c5fd",
        },
        ".dark": {
          "--background": "#0f0f1a",
          "--surface": "#1a1a2f",
          "--text": "#f1f2f6",
          "--primary": "#7f5af0",
          "--secondary": "#6246ea",
          "--muted": "#a1a1b5",
          "--border": "#2a2a40",
          "--hover": "#9f78ff",
        },
      });
    }),
  ],
};

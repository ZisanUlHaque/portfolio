import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#faf9f6",
          100: "#f7f5f0",
          200: "#eeebe3",
          300: "#e5e0d8",
          400: "#d5cfc4",
          500: "#b8b0a2"
        },
        terracotta: {
          50: "#fdf4f1",
          100: "#fbe8e3",
          200: "#f7d2c7",
          300: "#f0b1a0",
          400: "#e7856c",
          500: "#e05a38",
          600: "#c84828",
          700: "#a7381d"
        },
        cobalt: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
        dark: {
          900: "#121214",
          800: "#161618",
          700: "#202023",
          600: "#2a2a2e",
          500: "#38383e"
        },
        bg: {
          900: "#05060a",
          800: "#0a0c14",
          700: "#0f1320"
        },
        ink: {
          50: "#f5f7ff",
          100: "#e6e9f5",
          200: "#c7cce0",
          300: "#9aa1c0",
          400: "#6e7497",
          500: "#4b5072"
        },
        brand: {
          50: "#eafff7",
          100: "#c8ffe5",
          200: "#8fffce",
          300: "#3ff5b3",
          400: "#16e29a",
          500: "#00c484",
          600: "#08966b",
          700: "#0a7356",
          800: "#0c5a44"
        },
        accent: {
          400: "#7c5cff",
          500: "#6244ff",
          600: "#4d31e6"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(124,92,255,0.45)",
        soft: "0 10px 40px -10px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(124,92,255,0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(0,196,132,0.18), transparent 60%)"
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
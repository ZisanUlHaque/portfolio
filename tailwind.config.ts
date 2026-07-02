import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
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
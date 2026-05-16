import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        velvet: {
          base: "#150f28",
          low: "#1e1830",
          panel: "#221c35",
          raised: "#2c2640",
          edge: "#3d2f60",
          text: "#ffe3eb",
          quiet: "#8a6aa8",
          pink: "#f67599",
          gold: "#efc050",
          lilac: "#dcb8fc"
        }
      },
      fontFamily: {
        sans: ["Space Grotesk", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px"
      },
      boxShadow: {
        none: "none"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(320%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        "scan-line": "scan-line 4s linear infinite"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;

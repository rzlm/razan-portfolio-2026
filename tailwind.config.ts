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
          base: "hsl(var(--velvet-base))",
          low: "hsl(var(--velvet-low))",
          panel: "hsl(var(--velvet-panel))",
          raised: "hsl(var(--velvet-raised))",
          edge: "hsl(var(--velvet-edge))",
          text: "hsl(var(--velvet-text))",
          quiet: "hsl(var(--velvet-quiet))",
          pink: "hsl(var(--velvet-pink))",
          gold: "hsl(var(--velvet-gold))",
          lilac: "hsl(var(--velvet-lilac))"
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

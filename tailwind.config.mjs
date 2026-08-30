import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Deep navy reading surfaces
        ink: {
          DEFAULT: "#06356E",
          2: "#04264F",
        },
        // Near-black label panels, the way the tins carry their black labels
        surface: {
          DEFAULT: "#080D16",
          hover: "#101828",
        },
        // The saturated tin blue, for accent blocks and cover art
        cobalt: {
          DEFAULT: "#0A5AAE",
          bright: "#1276D8",
          deep: "#073F7D",
        },
        line: {
          DEFAULT: "#14498C",
          strong: "#8A6A22",
        },
        content: {
          DEFAULT: "#F8F3E7",
          muted: "#DCD2BC",
          faint: "#B3A98F",
        },
        brand: {
          DEFAULT: "#E8B33C",
          bright: "#F5CE72",
          deep: "#C8912A",
          ink: "#080D16",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        display: ["clamp(2.6rem, 7vw, 4.5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em", fontWeight: "600" }],
        title: ["clamp(2rem, 4.6vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "600" }],
        heading: ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.18", letterSpacing: "-0.01em", fontWeight: "600" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        card: "0.375rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

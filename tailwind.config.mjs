import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#FFFFFF",
          2: "#F4F3F0",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#FAFAF8",
        },
        line: {
          DEFAULT: "#E7E4DE",
          strong: "#CFCAC0",
        },
        content: {
          DEFAULT: "#0D0C0A",
          muted: "#4A4640",
          faint: "#8A857C",
        },
        brand: {
          DEFAULT: "#0D0C0A",
          bright: "#2A2620",
          deep: "#000000",
          ink: "#FFFFFF",
        },
        mint: {
          DEFAULT: "#F4F3F0",
          line: "#E7E4DE",
        },
        wash: "#F7F6F3",
        gold: "#CFCAC0",
        accent: {
          DEFAULT: "#D42A10",
          deep: "#B01E08",
        },
        signal: "#4F9A2F",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        serif: ["Figtree", ...defaultTheme.fontFamily.sans],
        display: ["Anton", "Impact", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: ["clamp(2.6rem, 6vw, 4.2rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }],
        title: ["clamp(2rem, 4.2vw, 2.9rem)", { lineHeight: "1.08", letterSpacing: "-0.035em", fontWeight: "700" }],
        heading: ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "700" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        card: "1.25rem",
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

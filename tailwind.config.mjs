import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#FFFFFF",
          2: "#F7F6F2",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#FCFCFA",
        },
        line: {
          DEFAULT: "#E6E3DC",
          strong: "#C9C6BE",
        },
        content: {
          DEFAULT: "#212121",
          muted: "#5A6069",
          faint: "#8C9199",
        },
        brand: {
          DEFAULT: "#2F6B18",
          bright: "#4FA92B",
          deep: "#245312",
          ink: "#FFFFFF",
        },
        mint: {
          DEFAULT: "#D5F2D8",
          line: "#B9E3BE",
        },
        wash: "#EBF5E3",
        gold: "#E8AF1C",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        serif: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        display: ["clamp(2.6rem, 7vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }],
        title: ["clamp(2rem, 4.6vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }],
        heading: ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
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

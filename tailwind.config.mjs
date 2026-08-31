import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#06251F",
          2: "#082E27",
        },
        surface: {
          DEFAULT: "#0C3A31",
          hover: "#0E4036",
        },
        line: {
          DEFAULT: "#1B4F44",
          strong: "#2A6B58",
        },
        content: {
          DEFAULT: "#F1F7F4",
          muted: "#C3D8D1",
          faint: "#9BB4AC",
        },
        brand: {
          DEFAULT: "#55b48e",
          bright: "#7ACFAC",
          deep: "#3C8E6E",
          ink: "#06251F",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#15161B",
          soft: "#1D1F26",
          line: "#2A2C35",
        },
        primer: "#F6F2E9",
        navy: {
          DEFAULT: "#2B3990",
          deep: "#1D2766",
        },
        signal: {
          red: "#E63329",
          gold: "#F5A623",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)",
      },
      keyframes: {
        drip: {
          "0%": { transform: "translateY(-6px)", opacity: "0" },
          "60%": { opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        wobble: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drip: "drip 0.9s ease-out both",
        wobble: "wobble 3.4s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        jarvis: {
          bg: "#0a0f1a",
          surface: "#111827",
          card: "#1a2332",
          border: "#1e3a5f",
          cyan: "#00d4ff",
          cyanLight: "#67e8f9",
          cyanDim: "#0e7490",
          teal: "#14b8a6",
          gold: "#f59e0b",
          red: "#ef4444",
          text: "#e2e8f0",
          cream: "#f0f9ff",
          dim: "#94a3b8",
          muted: "#64748b",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        display: ['"Orbitron"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "arc-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.1), 0 0 40px rgba(0,212,255,0.05)" },
          "50%": { boxShadow: "0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.1)" },
        },
        "hud-glow": {
          "0%, 100%": { borderColor: "rgba(0,212,255,0.15)" },
          "50%": { borderColor: "rgba(0,212,255,0.35)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.4s ease-out forwards",
        "arc-pulse": "arc-pulse 3s ease-in-out infinite",
        "hud-glow": "hud-glow 4s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

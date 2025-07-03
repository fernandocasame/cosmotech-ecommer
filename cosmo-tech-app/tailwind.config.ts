import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // blue-400 (Unchanged)
          DEFAULT: "#3b82f6", // blue-500 (Unchanged)
          dark: "#2563eb", // blue-600 (Unchanged)
        },
        secondary: { // Changed to Teal for more professional tech feel
          light: "#5eead4", // teal-300
          DEFAULT: "#14b8a6", // teal-500
          dark: "#0d9488", // teal-600
        },
        accent: { // Changed to a warmer Indigo/Violet
          light: "#a78bfa", // violet-400
          DEFAULT: "#8b5cf6", // violet-500
          dark: "#7c3aed", // violet-600
        },
        neutral: { // Added more detailed neutral shades
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1e293b", // slate-800
          900: "#0f172a", // slate-900
        },
        success: { // Added semantic colors
          light: "#4ade80", // green-400
          DEFAULT: "#22c55e", // green-500
          dark: "#16a34a", // green-600
        },
        warning: {
          light: "#facc15", // yellow-400
          DEFAULT: "#eab308", // yellow-500
          dark: "#ca8a04", // yellow-600
        },
        danger: {
          light: "#f87171", // red-400
          DEFAULT: "#ef4444", // red-500
          dark: "#dc2626", // red-600
        },
        // Keeping original direct color names for simplicity if needed,
        // but encouraging use of semantic names like 'primary', 'secondary', 'background'
        background: "#f8fafc", // slate-50 (New default background)
        foreground: "#0f172a", // slate-900 (New default text)
        card: "#ffffff", // white (Unchanged)
        'card-foreground': "#0f172a", // slate-900
        muted: "#f1f5f9", // slate-100
        'muted-foreground': "#64748b", // slate-500
        border: "#e2e8f0", // slate-200
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #3b82f6 0%, #14b8a6 100%)", // primary to secondary
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards', // Added for symmetry
        'subtle-beat': 'subtleBeat 1.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-out infinite', // For buttons or highlights
        'float': 'float 3s ease-in-out infinite', // For icons or decorative elements
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' }, // Increased Y translation
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' }, // Increased X translation
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: { // Added
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        subtleBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }, // Slightly more beat
        },
        pulseGlow: { // Added
          '0%, 100%': { boxShadow: '0 0 0px rgba(59, 130, 246, 0.4)' }, // primary color shadow
          '50%': { boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.7)' },
        },
        float: { // Added
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

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
          light: "#60a5fa", // blue-400
          DEFAULT: "#3b82f6", // blue-500
          dark: "#2563eb", // blue-600
        },
        secondary: {
          light: "#fb923c", // orange-400
          DEFAULT: "#f97316", // orange-500
          dark: "#ea580c", // orange-600
        },
        accent: {
          light: "#34d399", // emerald-400
          DEFAULT: "#10b981", // emerald-500
          dark: "#059669", // emerald-600
        },
        background: "#f9fafb", // gray-50
        foreground: "#111827", // gray-900
        card: "#ffffff", // white
        'card-foreground': "#111827", // gray-900
        muted: "#f3f4f6", // gray-100
        'muted-foreground': "#6b7280", // gray-500
        border: "#e5e7eb", // gray-200
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'subtle-beat': 'subtleBeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        subtleBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mclaren-orange': '#ff8000',
        'mclaren-blue': '#47c7fc',
        'mclaren-grey': '#282B28',
      },
      textShadow: {
        outline: '1px 1px 0px rgba(0,0,0,0.9)',
      },
      dropShadow: {
        'md-strong': '2px 5px 5px rgba(0, 0, 0, 0.5)',
        'glow-blue-strong': '2px 5px 5px #0010f6',
        'glow-blue': '0 0 7px rgba(0, 55, 255, 0.9)',
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      animation: {
        slideInOut: "slideInOut 0.8s ease-in-out infinite",
      },
      keyframes: {
        slideInOut: {
          '0%': { transform: 'translateX(-100vw)' },  // Start off-screen to the left
          '20%': { transform: 'translateX(0)' },     // Slide in to the center
          '80%': { transform: 'translateX(0)' },     // Slide in to the center
          '100%': { transform: 'translateX(100vw)' }, // Slide out to the right
        },
      }
    },
  },
  plugins: [require('tailwindcss-textshadow'),],
};
export default config;

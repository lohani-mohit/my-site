import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#60A5FA",
        secondary: "#34D399",
        accent: "#A78BFA",
        background: {
          dark: "#0A1929",
        },
        text: {
          dark: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        display: ["var(--font-cal-sans)", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('/images/night-camp.jpg')",
        "hero-dark":
          "linear-gradient(to bottom right, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#60A5FA",
          secondary: "#34D399",
          accent: "#A78BFA",
          neutral: "#F3F4F6",
          "base-100": "#0A1929",
          "base-200": "#0F2942",
          "base-300": "#1E3A5F",
        },
      },
    ],
  },
};
export default config;

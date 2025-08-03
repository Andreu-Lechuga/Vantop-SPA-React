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
        // VanTop Brand Colors
        primary: "#000000",
        secondary: "#333333",
        accent: "#D4AF37", // Dorado
        "accent-light": "hsl(49, 100%, 94%)", // Dorado Claro
        white: "#FFFFFF",
        "light-gray": "#F5F5F5",
        gray: "#CCCCCC",
        "dark-gray": "#666666",
      },
      fontFamily: {
        // Fuentes personalizadas VanTop
        anton: ["Anton", "sans-serif"],
        calsans: ["CalSans", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        playfair: ["PlayfairDisplay", "serif"],
        // Fuente principal para títulos VANTOP
        vantop: ["CalSans", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        md: "1rem",      // 16px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem",   // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem",  // 36px
      },
      spacing: {
        xs: "0.25rem",  // 4px
        sm: "0.5rem",   // 8px
        md: "1rem",     // 16px
        lg: "1.5rem",   // 24px
        xl: "2rem",     // 32px
        "2xl": "3rem",    // 48px
        "3xl": "4rem",    // 64px
      },
      borderRadius: {
        sm: "0.25rem", // 4px
        md: "0.5rem",  // 8px
        lg: "1rem",    // 16px
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      },
      transitionDuration: {
        fast: "0.2s",
        normal: "0.3s",
        slow: "0.5s",
      },
    },
  },
  plugins: [],
};

export default config;

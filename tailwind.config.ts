import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Основные цвета
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Основные фирменные цвета
        "sur-primary-blue": "var(--sur-primary-blue)",
        "sur-primary-green": "var(--sur-primary-green)",

        // Дополнительные цвета
        "sur-accent-teal": "var(--sur-accent-teal)",
        "sur-accent-purple": "var(--sur-accent-purple)",
        "sur-accent-yellow": "var(--sur-accent-yellow)",
        "sur-accent-pink": "var(--sur-accent-pink)",
        "sur-accent-red": "var(--sur-accent-red)",
        "sur-accent-sky": "var(--sur-accent-sky)",
        "sur-accent-orange": "var(--sur-accent-orange)",
        "sur-black": "var(--sur-black)",
      },
      fontFamily: {
        primary: ["var(--font-avenir-next)", "sans-serif"], // Avenir Next
        secondary: ["var(--font-open-sans)", "sans-serif"], // Open Sans
      },
    },
  },
  plugins: [],
} satisfies Config;

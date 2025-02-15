/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Georgian: ["Noto Serif Georgian", "serif"],
        Playfair: ["Playfair", "serif"],
        Georgia: ["Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "screen/1.1": "calc(100vh/1.1)",
        "screen/1.2": "calc(100vh/1.2)",
        "screen/1.5": "calc(100vh/1.5)",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vanguard': ['Vanguard', 'sans-serif'],
        'microgramma': ['Microgramma', 'sans-serif'],
        'avantgarde': ['AvantGarde', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-vertical': 'scrollVertical 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        }
      },
      colors: {
        'brand-red': '#e31c25',
        'brand-dark-red': '#bb000e',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
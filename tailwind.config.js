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
        scroll: 'scroll 80s linear infinite',
        'scroll-vertical': 'scrollVertical 50s linear infinite',
        fadeIn: 'fadeIn 500ms ease-in-out forwards',
        fadeOut: 'fadeOut 500ms ease-in-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollVertical: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
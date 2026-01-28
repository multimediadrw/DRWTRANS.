/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'royal-purple': {
          DEFAULT: '#2E1065',
          dark: '#1E0B43',
          light: '#4C1D95',
        },
        'amber-gold': {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
      },
    },
  },
  plugins: [],
}

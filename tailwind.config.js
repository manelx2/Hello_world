/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        friv: {
          deep: '#6A0DAD',
          purple: '#9B5DE5',
          cyan: '#00F5D4',
          pink: '#F15BB5',
          dark: '#1a052e',
        }
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'],
        mono: ['VT323', 'monospace'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 5px #00F5D4)' },
          '50%': { opacity: 0.8, filter: 'drop-shadow(0 0 15px #00F5D4)' },
        }
      }
    },
  },
  plugins: [],
};

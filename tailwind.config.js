import formsPlugin from '@tailwindcss/forms';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'finfrog-orange': '#F4EADF',
        'finfrog-grey': {
          100: '#7F8590',
          200: '#212836',
        },
        'finfrog-blue': {
          100: '#EDEEFE',
          200: '#CACBFC',
          300: '#4D50F4',
        },
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [formsPlugin, tailwindScrollbarHide],
};

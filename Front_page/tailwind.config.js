/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transitionDelay: {
        '1000': '1000ms',
      },
      boxShadow: {
        'text': '1px 1px 2px rgba(0, 0, 0, 0.8)',
      },
    },
    
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.transition-delay-1000': {
          transitionDelay: '1000ms',
        },
        '.text-shadow': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
        },
      });
    },
  ],
}


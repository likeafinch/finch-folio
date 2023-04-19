const twColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(to top, rgba(50, 50, 65, .2) 0%, rgba(50, 50, 65, .7) 100%)',
        about:
          'linear-gradient( to right, rgba(30, 40, 50, 0.9) 0%, rgba(80, 100, 120, 0.7) 100% )',
      },
      backgroundSize: {
        'triangle-size': '2.5rem',
      },
      boxShadow: {
        input: `0px -1px 0px 0px ${twColors.tertiary} inset`,
        'input-focused': `0px -2px 0px 0px ${twColors.tertiary} inset`,
        'input-error': `0px -2px 0px 0px ${twColors.rose[400]} inset`,
        'input-disabled': `0px -1px 0px 0px ${twColors.slate[200]} inset`,
        title: '0px -2px 0px 0px rgba(71, 85, 105, .7) inset',
      },
      colors: {
        primary: twColors.slate[100],
        secondary: twColors.indigo[200],
        tertiary: twColors.sky[100],
        rose: twColors.rose,
        slate: twColors.slate,
        indigo: twColors.indigo,
        teal: twColors.teal,
        sky: twColors.sky,
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        h2: [
          '44px',
          {
            letterSpacing: '0.05em',
            lineHeight: '52px',
          },
        ],
        h3: [
          '32px',
          {
            lineHeight: '40px',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '30px',
          },
        ],
        p1: [
          '20px',
          {
            letterSpacing: '0.05em',
            lineHeight: '25px',
          },
        ],
        p2: [
          '18px',
          {
            letterSpacing: '0.05em',
            lineHeight: '24px',
          },
        ],
        p3: [
          '16px',
          {
            letterSpacing: '0.05em',
            lineHeight: '22px',
          },
        ],
        p4: [
          '12px',
          {
            letterSpacing: '0.025em',
            lineHeight: '14px',
          },
        ],
        p5: [
          '12px',
          {
            letterSpacing: '0.025em',
            lineHeight: '16px',
          },
        ],
        p6: [
          '14px',
          {
            lineHeight: '16px',
          },
        ],
      },
      height: {
        fill: '-webkit-fill-available',
      },
      minHeight: {
        fill: '-webkit-fill-available',
        sm: '12rem',
      },
      maxHeight: {
        fill: '-webkit-fill-available',
      },
      width: {
        fill: '-webkit-fill-available',
      },
      minWidth: {
        fill: '-webkit-fill-available',
      },
      maxWidth: {
        fill: '-webkit-fill-available',
        screen: '100vw',
      },
      animation: {
        fade: 'fade 2s ease-in',
        'negative-rotate': 'negative-rotate 3s linear infinite',
        rotate: 'rotate 6s linear infinite',
        wave: 'wave linear 10s infinite alternate',
        'slide-in': 'slide-in 2s ease-in',
      },
      keyframes: {
        wave: {
          '0%': {
            d: 'path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z")',
          },
          '25%': {
            d: 'path("M 0 175 Q 200 150 400 200 Q 600 250 800 275 L 800 0 L 0 0 L 0 100 Z")',
          },
          '75%': {
            d: 'path("M 0 275 Q 150 350 400 200 Q 650 50 800 175 L 800 0 L 0 0 L 0 100 Z")',
          },
          '100%': {
            d: 'path("M 0 300 Q 150 350 400 200 Q 650 50 800 100 L 800 0 L 0 0 L 0 100 Z")',
          },
        },
        fade: {
          from: {
            opacity: 0.5,
          },
          to: {
            opacity: 1,
          },
        },
        rotate: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'negative-rotate': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
        'slide-in': {
          from: {
            opacity: 0.5,
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
};

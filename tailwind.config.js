module.exports = {
  purge: [
    './pages/**/*.{tsx}',
    './components/**/*.{tsx}',
    './utils/**/*.{tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      colors: {
        black: '#172126',
        white: '#fff',
        gray: {
          lightest: '#F7F8F9',
          light: '#E1E7EA',
          DEFAULT: '#95A8B2',
          dark: '#566B76',
          darkest: '#253239',
        },
        orange: {
          DEFAULT: '#FF6A33',
          dark: '#C34E22',
        },
        token: {
          keyword: '#FF25AC',
          string: '#00B78E',
          method: '#00ACFF',
          delimiter: '#fff',
        },
      },
      boxShadow: {
        orange: '0 4px 16px hsla(350, 100%, 64%, 0.32)',
        'orange-sm': '0 1px 2px 0 hsla(350, 100%, 64%, 0.32)',
      },
      typography: {
        lg: {
          css: {
            pre: {
              margin: 0,
              padding: 0,
              fontSize: '1rem',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      rotate: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

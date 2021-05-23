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
          DEFAULT: '#ff6a33',
          50: '#ff9c65',
          100: '#ff925b',
          200: '#ff8851',
          300: '#ff7e47',
          400: '#ff743d',
          500: '#ff6a33',
          600: '#f56029',
          700: '#eb561f',
          800: '#e14c15',
          900: '#d7420b',
        },
        token: {
          keyword: '#FF25AC',
          string: '#00B78E',
          method: '#00ACFF',
          delimiter: '#fff',
        },
        graphql: {
          50: '#ff78d9',
          100: '#f86ecf',
          200: '#ee64c5',
          300: '#e45abb',
          400: '#da50b1',
          500: '#d046a7',
          600: '#c63c9d',
          700: '#bc3293',
          800: '#b22889',
          900: '#a81e7f',
        },
      },
      boxShadow: {
        orange: '0 4px 16px hsla(350, 100%, 64%, 0.32)',
        'orange-sm': '0 1px 2px 0 hsla(350, 100%, 64%, 0.32)',
      },
      zIndex: {
        '-10': '-10',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              letterSpacing: '-1px',
            },
            h2: {
              marginBottom: 24,
            },
            code: {
              border: 0,
              backgroundColor: '#ECE9FC',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              margin: 0,
              padding: 0,
              fontSize: '1rem',
            },
            pre: false,
            blockquote: {
              color: 'colors.gray.700',
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
          },
        },
      }),
      keyframes: {
        blink: {
          '0%,100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        blink: 'blink 1.25s infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover', 'motion-safe'],
      rotate: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

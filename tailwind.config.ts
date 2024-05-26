import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'var(--font-geist-sans)',
    },
    colors: {
      main: '#000212',
      accent: '#5e6ad2',
      white: '#fff',
      'white/8': 'hsla(0,0%,100%,.08)',
      transparent: 'transparent',
    },
    fontSize: {
      regular: '1.6rem',
      '5xl': ['8rem', '8rem'],
      xl: ['4.4rem', '4.4rem'],
      lg: ['2.2rem', '2.86rem'],
      md: ['1.8rem', '2.34rem'],
      sm: '1.4rem',
      xs: '1.3rem',
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      'header-height': 'var(--header-height)',
    },
    backgroundImage: {
      'primary-gradient': 'linear-gradient(to right, #5e6ad2, #5e6aff 70%)',
    },
  },
  plugins: [],
}
export default config

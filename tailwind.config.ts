import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      'white-light': '#F3F8FF',
      'black-light': '#242424',
      'purple-primary': '#49108B',
      'purple-light': '#7E30E1',
      'pink-primary': '#E26EE5',
      'blue-light': '#8BE8E5',
      'green-light': '#D5FFE4',
      black: '#000000',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
    fontFamily: {
      primary: ['var(--font-outfit)'],
      secondary: ['var(--font-inter)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        '3': '1fr 1.5fr 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

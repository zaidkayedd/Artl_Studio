/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',
      1300: '1300px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Onset: ['Onest', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      backgroundSize: {
        '60px': '60px 60px', // Custom background size utility
      },
      backgroundImage: {
        'circle-gradient': 'linear-gradient(360deg, #686EDA -9.8%, #15F3AF 99.02%)',
      },
    },
  },
  plugins: [],
}

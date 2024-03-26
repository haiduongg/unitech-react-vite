/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Poppins"'],
      OpenSans: ['"OpenSans"'],
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        '2xl': '1260px',
      },
    },
    extend: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))',
      colors: {
        green: {
          100: '#F4F8EC',
          200: '#C8DEB3',
          300: '#92C064',
          400: '#46760A',
          500: '#6A983C',
        },
        primary: {
          50: '#e6f7ff',
          100: '#b0e5fe',
          200: '#8ad8fe',
          300: '#54c7fe',
          400: '#33bcfd',
          500: '#00abfd',
          600: '#009ce6',
          700: '#0079b4',
          800: '#005e8b',
          900: '#00486a',
          DEFAULT: '#00ABFD',
        },
        secondary: {
          50: '#efecf9',
          100: '#cec4eb',
          200: '#b7a8e2',
          300: '#9680d4',
          400: '#8168cc',
          500: '#6242bf',
          600: '#593cae',
          700: '#462f88',
          800: '#362469',
          900: '#291c50',
          DEFAULT: '#6242BF',
        },
      },
    },
  },
  plugins: [],
};

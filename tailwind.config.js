/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}'
  ],  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 200,
        light: 300,
        medium: 500,
        'semi-bold': 600,
        bold: 700,
        'extra-bold': 800,
        black: 900,
      },
      backgroundImage: {
        'login-bg': "url('/background.png')",
      
      },
      colors: {
        background: '#f5f8ff',
        primary: '#0e2f65',
        secondary: '#118dd2',
        'secondary-light': '#118def',
        shanks: '#9d1111',
        gray: '#7c7c7c',
        lightGray: '#7c8594',
        mustard: '#fcd116',
      },
      textColor: {
        primary: '#0e2f65',
        secondary: '#118dd2',
        'secondary-light': '#118def',
        darkBlue: '#0E2F65',
        blue900:'#0E3687',
        gray: '#7c7c7c',
        lightGray: '#7c8594',
        background: '#eaeaea',
        mustard: '#fcd116',
        neutral: '#3F3F46',
      },
      borderColor: {
        primary: '#0e2f65',
        secondary: '#118dd2',
        'secondary-light': '#118def',
        shanks: '#9d1111',
        gray: '#7c7c7c',
        lightGray: '#7c8594',
        background: '#eaeaea',
        mustard: '#fcd116',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 90s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

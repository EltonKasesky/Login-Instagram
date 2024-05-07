/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html, js}'
  ],
  theme: {
    extend: {
      spacing: {
        '135': '135px',
        '44': '44px',
        '110': '110px',
        '350': '350px',
        '90%': '90%',
        'top-mobile': '50px',
      },
      screens: {
        'mobile': '380px'
      },
      fontSize: {
        'placeholder': '13px',
        'or': '13px',
        'facebook': '14px',
        'create-account': '14px',
        'app': '14px'
      },
      colors: {
        'blue-button': '#4CB4F8',
        'blue-link': '#4CB4F8',
        'blue-facebook': '#385185'
      },
      fontFamily: {
        'Poppins': 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
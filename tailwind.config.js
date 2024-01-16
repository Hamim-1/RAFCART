/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/**/*.js'],
  theme: {
    screens: {
      xs: '440px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        "primary": '#fd3d57',
        "secondary": "#374151",
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}


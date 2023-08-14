/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],  
  theme: {
    extend: {
      colors: {
        custom: '#FF5733',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
}


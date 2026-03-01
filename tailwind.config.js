/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbf8f1',
          100: '#f4ecd9',
          200: '#e9d9b2',
          300: '#dbbe83',
          400: '#ce9f5a',
          500: '#c2813d', // Основний золотисто-коричневий
          600: '#ae6832',
          700: '#91502b',
          800: '#764228',
          900: '#643925',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd',
          400: '#989898',
          500: '#7c7c7c',
          600: '#656565',
          700: '#525252',
          800: '#464646',
          900: '#3d3d3d',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

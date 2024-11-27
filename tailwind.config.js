/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'Manrope',
        Poppins: 'Poppins',
      },
      colors: {
        'Light-Cyan': '#CEE3E9',
        'Neon-Green': '#52FFA8',
        'Grayish-Blue': '#4E5D73',
        'Dark-Grayish-Blue': '#313A48',
        'Dark-Blue': '#1F2632',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html',
    './node_modules/@my-company/tailwind-components/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-100': '#0e1433',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: false,
    content: [
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./public/index.html",
        "./node_modules/@my-company/tailwind-components/**/*.js",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

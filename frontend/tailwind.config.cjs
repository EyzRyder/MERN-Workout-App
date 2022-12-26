/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#1aac83',
                error: '#e7195a',
            },
            fontFamily: {
                body: ['Poppins']
            }
        },
    },
    plugins: [],
}
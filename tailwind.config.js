/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'Grotesk': ['Founders Grotesk XCond', 'sans-serif'],
                'Neue': ['Neue Montreal Regular', 'sans-serif'],
            },
            animation: {
                'underline-reveal': 'underline-reveal 1s linear infinite',
            },
            keyframes: {
                'underline-reveal': {
                    '0%': { width: '0%', opacity: 1 },
                    '50%': { width: '100%', opacity: 1 },
                    '50.01%': { opacity: 0 },
                    '100%': { width: '0%', opacity: 0 },
                },
            },
        },
    },
    plugins: [],
}
/** @type {import('tailwindcss').Config} */
/** @type {import('./src/assets/LexendDeca.ttf')} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json,css}"],
    theme: {
        fontFamily: {
            main: ["Lexend Deca"],
            json: ["Monaco, Menlo, Consolas, 'Courier New', monospace"],
        },
        extend: {
            transitionTimingFunction: {
                ease: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            },
            animation: {
                textWriter:
                    "typing 0.75s steps(3000, end), blink-caret 0.6s step-end infinite",
            },
            keyframes: {
                typing: {
                    from: {
                        width: 0,
                    },
                    to: {
                        width: "100%",
                    },
                },
                "blink-caret": {
                    to: {
                        "border-color": "transparent",
                    },
                    "50%": {
                        "border-color": "rgb(57, 60, 65)",
                    },
                },
            },
        },
    },
    plugins: [],
};

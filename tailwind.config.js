/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#7c3aed",
                secondary: "#1e1b4b",
                bases: "#27272a",
                dark: "#020617",
                kopi: "#c0ffee",
            },
            spacing: {
                13: "3.25rem",
            },
            fontFamily: {
                signika: ["Signika Negative"],
                explora: ["Explora"],
            },
            screens: {
                tablet: "640px",
                // => @media (min-width: 640px) { ... }

                laptop: "1196px",
                // => @media (min-width: 1024px) { ... }

                // "2xl": "1320px",
                desktop: "1980px",
            },
            backgroundImage: {
                gambar: "url('https:/source.unsplash.com/1000x600?computer')",
                profilpic: "url('/src/assets/Non-Formal-New.jpg')",
                bg: "url('/src/assets/bg.jpg')",
            },
        },
    },
    plugins: [],
};

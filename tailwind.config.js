/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-green": "#1dd1a1",
        "my-green-light": "#42DAB0",
        "my-blue": "#0abde3",
        "my-blue-light": "#48dbfb",
        "my-blue-dark": "#5f27cd",
        "my-red": "#ee5253",
        "my-red-light": "#ff6b6b",
        "my-yellow": "#feca57",
        "my-orange": "#ff9f43",
        "my-gray-dark": "#222f3e",
        "my-gray": "#576574",

      },
      fontFamily: {
        doodle: ['Doodle', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


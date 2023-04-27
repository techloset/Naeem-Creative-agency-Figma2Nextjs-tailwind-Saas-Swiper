/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "exact-red": "#FF2D59",
        "exact-purple": "#4C40F7",
        "exact-orange": "#FF6800",
        "exact-gray": "#6B6B6B",
        "exact-green": "#4ADB61",
        "exact-yellow": "#FFCC00",
        "exact-blue": "#007BFF",
      },
      listStyleImage: {
        checkmark: 'url("./src/assests/images/checkmark.png")',
      },
    },
  },
  plugins: [],
};

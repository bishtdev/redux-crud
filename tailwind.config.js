/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'brown-gradient': 'linear-gradient(to top, #c79081 0%, #dfa579 100%)',
    },},
  },
  plugins: [],
}


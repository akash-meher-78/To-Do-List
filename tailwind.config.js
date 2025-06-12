/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
       screens: {
        'max-450': {'max': '450px'},
      },
    },
  },
  plugins: [],
}

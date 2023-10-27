/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ryan-gosling': "url('https://thumbs.dfs.ivi.ru/storage3/contents/7/1/6d4729dab99d2520653849f6a22e20.jpg/858x483/?q=85')",
        'kino': "url('https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg')"
      },
      fontFamily: {
        'instrument-serif': ['Instrument Serif'],
        "manrope": ['Manrope'],
        "montserrat": ['Montserrat']
      }
    },
  },
  plugins: [],
}


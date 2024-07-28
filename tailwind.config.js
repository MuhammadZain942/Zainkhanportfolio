/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  taos: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, '')
  }
}

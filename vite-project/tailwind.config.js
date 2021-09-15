module.exports = {
  mode: 'jit', // 開啟監聽模式 可以讓css變小 抽取有用的
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 把連結內的內容搜尋 tailwind
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

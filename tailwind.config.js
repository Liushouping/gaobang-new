module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue' : '#242870',
        'custom-gray' : '#606060'
      },
      cursor: {
      },
      letterSpacing: {
      },
      fontFamily: {
        GenJyuuGothicBold: ['GenJyuuGothicBold', 'SweiGothicCJKtcBold'],
        GenJyuuGothicRegular: ['GenJyuuGothicRegular', 'SweiGothicCJKtcRegular'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    gradientColorStops: true,
  },
}

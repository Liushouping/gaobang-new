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
        sans: ['Comfortaa-Light'],
        ComfortaaBold: ['Comfortaa-Bold'],
        GenJyuuGothicBold: ['GenJyuuGothicBold'],
        GenJyuuGothicRegular: ['GenJyuuGothicRegular'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    gradientColorStops: true,
  },
}

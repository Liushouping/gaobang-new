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
        // sans: ['Comfortaa-Light'],
        GenJyuuGothicBold: ['GenJyuuGothicBold'],
        GenJyuuGothicRegular: ['GenJyuuGothicRegular'],
        // ComfortaaBold: ['Comfortaa-Bold'],
      }
    },
  },
  plugins: [],
  corePlugins: {
    gradientColorStops: true,
  },
}

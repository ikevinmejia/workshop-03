module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundColor: {
        mainBgColor: "#F6FFFB",
        greyColor: "#797979",
        primary: "#B4FFD8",
        secondary: "rgba(180, 255, 216, 0.16)",
      },
      textColor: {
        mainBgColor: "#F6FFFB",
        greyColor: "#797979",
        primary: "#B4FFD8",
        secondary: "rgba(180, 255, 216, 0.16)",
      },
      colors: {
        mainBgColor: "#F6FFFB",
        greyColor: "#797979",
        primary: "#B4FFD8",
        secondary: "rgba(180, 255, 216, 0.16)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
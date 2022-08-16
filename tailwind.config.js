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
      backgroundImage: {
        b1: "url('../src/img/b1.png')",
        b2: "url('../src/img/b2.png')",
        b3: "url('../src/img/b3.png')",
        b1f: "url('../src/img/b1f.png')",
        b2f: "url('../src/img/b2f.png')",
        b3f: "url('../src/img/b3f.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
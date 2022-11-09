module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**.tsx",
    "./src/layouts/**.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainImg: "url(@/assets/images/bg.png)",
      },
      fontFamily: {
        "IBMPlexMono-Regular": ["IBM Plex Mono Regular"],
        "IBMPlexMono-Bold": ["IBM Plex Mono Bold"],
        "IBMPlexMono-Light": ["IBM Plex Mono Light"],
        "IBMPlexMono-SemiBold": ["IBM Plex Mono SemiBold"],
        "Inter-Bold": ["Inter-Bold"],
        "Inter-Regular": ["Inter-Regular"],
        "Inter-SemiBold": ["Inter-SemiBold"],
      },
      colors: {
        // 浅绿色渐变 - 炫彩（白） - 起始
        "xc1-a": "#53C78E",
        // 浅绿色渐变 - 炫彩（白） - 结束
        "xc1-b": "#9CCB28",
        // 浅绿色渐变 - 炫彩2 - 起始
        "xc2-a": "#79D5A8",
        // 浅绿色渐变 - 炫彩2 - 结束
        "xc2-b": "#D5F97D",
        innerColor: "#14434E",
      },
    },
  },
};

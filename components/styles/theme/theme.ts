export type ThemeType = typeof theme;

const theme = {
  mode: "light",
  color: {
    textColor: "blue",
    colorPrimary: "rgba(225, 240, 247, 0.2)",
    colorPrimaryDark: "rgba(225, 240, 247, 0.5)",
    colorPrimaryBlack: "rgba(0,0,0,0.2)",
    btnColor: "rgb(21, 151, 232)",
    borderColor: "rgb(21, 151, 232)",
    cubeColor: "rgb(201, 229, 242)",
    colorTransparent: `linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.4)
  )
  
`,
    // colorNeon: ""
  },

  marginSmall: "0.6em",

  marginMid: "1.2em",

  marginLarge: "7em",

  paddingSmall: "0.9em",

  paddingMid: "1.2em",

  paddingLarge: "1.5em",

  fontSize: {
    fsbody: "clamp(0.8rem, 3vw, 1rem)",
    mid: "clamp(1.1rem, 4vw, 1.2rem)",
    large: "clamp(1.2rem, 4vw, 2rem)",
    btn: "clamp(1rem, 4vw, 1.05rem)",
  },

  textBold: {
    small: 8,
    super: 9,
  },

  gap: "2em",
};

export default theme;

const theme = {
  color: {
    textColor: "blue",
    colorPrimaryBlue: "rgba(225, 240, 247, 0.2)",
    colorPrimaryBlack: "rgba(0,0,0,0.2)",
    colorTransparent: `linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  )
`,
    // colorNeon: ""
  },

  marginSmall: "0.9em",

  marginMid: "1.2em",

  marginLarge: "1.5em",

  paddingSmall: "0.9em",

  paddingMid: "1.2em",

  paddingLarge: "1.5em",

  fontSize: {
    body: "clamp(0.95rem, 4vw, 1rem)",
    mid: "clamp(1.1rem, 4vw, 1.2rem)",
    large: "clamp(1.2rem, 4vw, 2rem)",
  },

  textBold: {
    small: 8,
    super: 9,
  },

  gap: "2em",
};

export default theme;

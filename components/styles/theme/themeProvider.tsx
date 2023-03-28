"use client";

import React from "react";
import { useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";

export interface ThemeContextInterface {
  mode: string | null;
  updateMode: () => void;
}

export const ThemeContext = React.createContext<ThemeContextInterface | null>(
  null
);

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [mode, setMode] = useState<string | null>(null);

  useEffect(() => {
   const storedMode = localStorage.getItem("mode");

   if(storedMode == "undefined") {
    setMode("light")
   }else {
    setMode(storedMode)
   }

  }, []);

  const updateMode = () => {
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  const theme = {
    mode: mode === "light" ? "light" : "dark",
    color: {
      textColor: mode === "light" ? "black" : "white",
      colorPrimary: mode === "light" ? "rgba(225, 240, 247, 0.2)" : "#202023",
      colorPrimaryDark:
        mode === "light" ? "rgba(225, 240, 247, 0.5)" : "#323234",
      colorPrimaryBlack: "rgba(0,0,0,0.2)",
      btnColor: mode === "light" ? "rgb(21, 151, 232)" : "rgb(120, 204, 235)",
      borderColor: mode === "light" ? "rgba(0,0,0,0.4)" : "#fafafa",
      cubeColor: "rgb(201, 229, 242)",
      colorTransparent: `linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.4)
      )
      `,
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
    gapTwo: "3em",
    gap: "2em",
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, updateMode }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeContextProvider;

"use client";

import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    color: #000;
    font-family: ${inter.style.fontFamily}, serif;
    min-height: 100vh;
    background: ${({ theme }) => theme.color.colorPrimaryBlue};
  }

  .align-center {
    align-items: center;
  }

   .justify-center{
    justify-content: center
  }

  .capitalize {
    text-transform: capitalize;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .bg-primary-blur {
    background: ${({ theme }) => theme.color.colorTransparent};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px -30px rgba(0, 0, 0, 0.37);
  }

  .pd-block-mid {
    padding-block: ${({ theme }) => theme.paddingMid}
  }

`;

console.log(inter);

export default GlobalStyle;

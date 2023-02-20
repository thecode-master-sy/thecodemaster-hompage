"use client";

import { createGlobalStyle } from "styled-components";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  body {
    color: #000;
    font-family: ${inter.style.fontFamily}, serif;
    font-size: ${({ theme }) => theme.fontSize.fsbody};
    min-height: 100vh;
    background: ${({ theme }) => theme.color.colorPrimaryBlue};
  }

  .align-center {
    align-items: center;
  }

  .justify-center{
    justify-content: center
  }

  .justify-space-between {
    justify-content: space-between; 
  }

  .direction-column {
    flex-direction: column
  }

  .capitalize {
    text-transform: capitalize;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .block {
    display: block;
  }

  .bg-primary-blur {
    background: ${({ theme }) => theme.color.colorTransparent};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 8px 32px -30px rgba(0, 0, 0, 0.37);
  }

  .bg-primary-blue {
    background: ${({ theme }) => theme.color.colorPrimaryBlue}
  }

  .bg-primary-blue-dark {
    background: ${({ theme }) => theme.color.colorPrimaryBlueDark}
  }

  .pd-top-mid {
    padding-top: ${({ theme }) => theme.paddingMid}
  }

  .pd-block-small {
    padding-block: ${({ theme }) => theme.paddingSmall}
  }

  .pd-inline-small {
    padding-inline: ${({ theme }) => theme.paddingSmall}
  }

  .pd-block-mid {
    padding-block: ${({ theme }) => theme.paddingMid}
  }

  .mg-left-small {
    margin-left: ${({ theme }) => theme.marginSmall}
  }

  .mg-top-small {
    margin-top: ${({ theme }) => theme.marginSmall}

  }

  .mg-top-mid {
    margin-top: ${({ theme }) => theme.marginMid}
  }

  .mg-top-large {
    margin-top: ${({ theme }) => theme.marginLarge}
  }

  .fs-large {
    font-size: ${({ theme }) => theme.fontSize.large}
  }
  
  .fs-mid {
    font-size: ${({ theme }) => theme.fontSize.mid}
  }

  .position-relative {
    position: relative;
  }

  .responsive {
    flex-direction: column;
    
    @media screen and (min-width: 50em) {
      flex-direction: row;
    }

  }

  .flex {
    display: flex;
  }

  .border-rounded {
    border-radius: 0.2em;
  } 
`;

console.log(inter);

export default GlobalStyle;

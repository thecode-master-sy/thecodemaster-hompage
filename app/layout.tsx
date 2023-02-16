"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "@/components/styles/global.styled";
import { ThemeProvider } from "styled-components";
import theme from "@/components/styles/theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

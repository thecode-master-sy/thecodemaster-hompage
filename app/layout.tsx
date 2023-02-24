"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "@/components/styles/global.styled";
import { FlexContainer } from "@/components/styles/css.styled";
import ThemeContextProvider from "@/components/styles/theme/themeProvider";
import dynamic from "next/dynamic";

const Cube = dynamic(
  () => {
    return import("@/components/Cube");
  },
  { ssr: true }
);

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
          <ThemeContextProvider>
            <GlobalStyle />
            <Navbar />
            <FlexContainer
              className="align-center justify-center"
              style={{
                minHeight: "90vh",
              }}
            >
              <Cube />
            </FlexContainer>

            {children}
            <Footer />
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

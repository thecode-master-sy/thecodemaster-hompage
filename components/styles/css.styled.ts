"use client";
import styled from "styled-components";
import { css } from "styled-components";

interface StyledContainerProps {
  height?: string;
  fill?: string;
}

interface FlexContainerProps {
  gap?: string;
}

interface StyledNavbarProps {
  display?: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: min(100%, 800px);
  padding: 0.8em;
  margin-inline: auto;
  font-family: sans-serif;
  ${({ height }) =>
    height &&
    css`
      min-height: ${height};
    `}
  ${({ fill, theme }) =>
    fill == "transparent"
      ? css`
          background: ${theme.color.colorTransparent};
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px -25px rgba(0, 0, 0, 0.37);
        `
      : fill}
`;

export const StyledNavbar = styled.nav<StyledNavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap};
    position: absolute;
    top: 125%;
    right: 0;
    background: ${({ theme }) => theme.color.colorPrimaryBlueDark};
    padding: ${({ theme }) => theme.paddingSmall};
    border-radius: 0.5em;
    z-index: 10;
    display: ${({ display }) => (display ? "flex" : "none")};
    transition: all ease 0.5s;
  }

  @media screen and (min-width: 50em) {
    .hamburger {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      position: relative;
      background: none;
      padding: 0;
      align-items: center;
    }
  }
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  gap: ${({ gap, theme }) => (gap ? gap : theme.gap)};
`;

export const ThemeSwitch = styled(FlexContainer)`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding-block: 0.5em;
  padding-inline: 0.5em;
  cursor: pointer;
  border-radius: 0.5em;
`;

export const ResponsiveNav = styled.div`
  position: absolute;
  top: 100%;
  left: -100%;
  border: 1px solid black;

  @media screen and (min-width: 50em) {
    position: relative;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mid};
  font-weight: 700;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: rgba(0, 0, 0.3);
  }
`;

export const Text = styled.p`
  line-height: 1.8;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.gap};
`;

export const ResponsiveGrid = styled(GridContainer)`
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Card = styled.div`
  padding: ${({ theme }) => theme.paddingMid};
  border-radius: "0.5em";
  background-color: ${({ theme }) => theme.color.colorPrimaryBlueDark};
  box-shadow: 0 0 8px -6px rgba(0, 0, 0, 0.5);
`;

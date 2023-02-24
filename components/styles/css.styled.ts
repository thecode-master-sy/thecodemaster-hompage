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
  show?: boolean;
}

interface StyledCardProps {
  position?: {
    x: number;
    y: number;
  };
  ref: any;
}

interface ThemeSwitchProps {
  mode?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: min(100%, 800px);
  padding: 1.1em;
  margin-inline: auto;
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
    background: ${({ theme }) => theme.color.colorPrimaryDark};
    padding: ${({ theme }) => theme.paddingSmall};
    border-radius: 0.5em;
    z-index: 10;
    display: ${({ show }) => (show ? "flex" : "none")};
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

export const ThemeSwitch = styled(FlexContainer)<ThemeSwitchProps>`
  border: 1px solid ${({ theme }) => theme.color.borderColor};
  padding-block: 0.5em;
  padding-inline: 0.5em;
  cursor: pointer;
  border-radius: 0.5em;
  overflow: hidden;

  .icon {
    position: relative;
    min-width: 2em;
  }

  .sun,
  .moon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all ease 0.5s;
  }

  ${({ mode }) =>
    mode === "light"
      ? css`
          .sun {
            transform: translateY(-50%);
          }

          .moon {
            transform: translateY(-300%);
          }
        `
      : css`
          .moon {
            transform: translateY(-50%);
          }

          .sun {
            transform: translateY(-300%);
          }
        `}
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
    background-color: ${({ theme }) => theme.color.borderColor};
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

export const StyledCard = styled.div<StyledCardProps>`
  padding: ${({ theme }) => theme.paddingMid};
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.colorPrimaryDark};
    border-radius: 0.5em;
    box-shadow: 0 0 8px -6px rgba(0, 0, 0, 0.5);
    transition: all linear 0.5s;
    z-index: -1;

    ${({ position }) =>
      position &&
      css`
        transform: translateX(${position.x}px) translateY(${position.y}px);
      `}
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.btnColor};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.8em 2em;
  font-size: ${({ theme }) => theme.fontSize.btn};
  color: white;
  border-radius: 0.2em;

  &:hover,
  &:active {
    .icon {
      transform: translateX(8px);
      transition: all linear 0.5s;
    }
  }
`;

export const ImageFrame = styled.div`
  border: 2px solid ${({ theme }) => theme.color.borderColor};
  padding: 0.2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

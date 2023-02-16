import styled from "styled-components";
import { css } from "styled-components";

interface StyledContainerProps {
  height?: string;
  fill?: string;
}

interface FlexContainerProps {
  gap?: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: min(100%, 800px);
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

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;

  ul {
    list-style-type: none;
    display: flex;
  }

  ul li + li {
    margin-left: ${({ theme }) => theme.gap};
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

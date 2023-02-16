"use client";

import { StyledContainer } from "./styles/css.styled";

export const Container = ({
  children,
  height,
}: {
  children: React.ReactNode;
  height: string;
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};

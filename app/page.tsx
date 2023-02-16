"use client";

import Cube from "@/components/Cube";
import { FlexContainer, StyledContainer } from "@/components/styles/css.styled";
import { Container } from "@/components/utilis";

export default function Home() {
  return (
    <StyledContainer>
      <FlexContainer
        className="align-center justify-center"
        style={{
          minHeight: "80vh",
        }}
      >
        <Cube />
      </FlexContainer>
    </StyledContainer>
  );
}

"use client";

import { StyledCard } from "./styles/css.styled";
import { useState, useRef } from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  const [positionX, setX] = useState<number>(0);
  const [positionY, setY] = useState<number>(0);

  const card: any = useRef();

  const moveBackground = (e: React.MouseEvent<HTMLElement>) => {
    const max = 30;

    const maxWidth = card.current.offsetWidth;

    const maxHeight = card.current.offsetHeight;

    const X = (e.nativeEvent.offsetX / maxWidth) * max;

    const Y = (e.nativeEvent.offsetY / maxHeight) * max;

    setX(X);
    setY(Y);
  };

  const mouseLeave = () => {
    setX(0);
    setY(0);
  };

  return (
    <StyledCard
      onMouseMove={(e) => {
        moveBackground(e);
      }}
      position={{ x: positionX, y: positionY }}
      ref={card}
      onMouseLeave={mouseLeave}
    >
      {children}
    </StyledCard>
  );
};

export default Card;

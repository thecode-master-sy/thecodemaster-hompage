"use client";

import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";

import jsLogo from "../public/javascript-logo.svg";
import tsLogo from "../public/typescript-logo.svg";
import cssLogo from "../public/css-logo.svg";
import reactLogo from "../public/react.svg";
import nextLogo from "../public/next.svg";
import nodeLogo from "../public/nodejs-icon.svg";

interface CubeInterface {
  grabbing?: boolean;
  rotateX: number;
  rotateY: number;
  containerSize: number;
}

interface FaceInterface {
  containerSize: number;
}

const rotate = (rotateX: number) =>
  keyframes`
  0% {
    transform: rotateX(${rotateX}deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(${rotateX}deg) rotateY(360deg);
  }
`;

const CubeContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MainCube = styled.div<CubeInterface>`
  transform-style: preserve-3d;
  width: ${({ containerSize }) => containerSize}px;
  height: ${({ containerSize }) => containerSize}px;
  position: relative;
  touch-action: none;

  transform: ${({ rotateX, rotateY }) =>
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`};

  ${({ grabbing, rotateX }) =>
    grabbing
      ? css`
          cursor: grab;
        `
      : css`
          animation: ${rotate(rotateX)} 20s linear infinite;
        `}
`;

const Faces = styled.div<FaceInterface>`
  position: absolute;
  width: ${({ containerSize }) => containerSize}px;
  height: ${({ containerSize }) => containerSize}px;
  line-height: 1.5;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.color.cubeColor};
  aspect-ratio: 1/1;
  user-select: none;
  border-radius: 0.2em;

  &.front {
    transform: translateZ(${({ containerSize }) => containerSize / 2}px);
  }

  &.back {
    transform: rotateY(-180deg)
      translateZ(${({ containerSize }) => containerSize / 2}px);
  }
  &.top {
    transform: rotateX(90deg)
      translateZ(${({ containerSize }) => containerSize / 2}px);
  }
  &.bottom {
    transform: rotateX(-90deg)
      translateZ(${({ containerSize }) => containerSize / 2}px);
  }

  &.left {
    transform: rotateY(-90deg)
      translateZ(${({ containerSize }) => containerSize / 2}px);
  }
  &.right {
    transform: rotateY(90deg)
      translateZ(${({ containerSize }) => containerSize / 2}px);
  }
  &.shadow {
      background-color: ${({ theme }) => theme.color.cubeColor};
      transform: rotateX(-90deg) translateZ(150px);
      filter: blur(20px);
      box-shadow: 0 0 120px rgba(201, 229, 242, 0.2),
      0 0 120px rgba(201, 229, 242, 0.4),
0 0 120px rgba(201, 229, 242, 0.6),
0 0 120px rgba(201, 229, 242, 0.8),
0 0 120px rgba(201, 229, 242, 1);

    }
  }
`;

const Cube = () => {
  const [grabbing, setGrabbing] = useState<boolean>(false);
  const [rotateX, setRotateX] = useState<number>(-15);
  const [rotateY, setRotateY] = useState<number>(15);
  const [startingX, setStartingX] = useState<number>(0);
  const [startingY, setStartingY] = useState<number>(0);
  const [endingX, setEndingX] = useState<number>(0);
  const [endingY, setEndingY] = useState<number>(0);
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setSize(window.innerWidth);
    };

    // browser code
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });

  const containerWidth = size <= 800 ? 150 : 250;

  const mouseDown = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setGrabbing(true);
    setStartingX(e.clientY);
    setStartingY(e.clientX);
  };

  const mouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (grabbing) {
      setEndingY(e.clientX);
      setEndingX(e.clientY);

      const diffX = endingX - startingX;
      const diffY = endingY - startingY;

      setRotateX((rotateX + -diffX) / 2);
      setRotateY((rotateY + diffY) / 2);
    }
  };

  const mouseUp = () => {
    setGrabbing(false);
  };

  const touchStart = (e: React.TouchEvent<HTMLElement>) => {
    setGrabbing(true);
    setStartingX(e.changedTouches[0].clientY);
    setStartingY(e.changedTouches[0].clientX);
  };

  const touchMove = (e: React.TouchEvent<HTMLElement>) => {
    if (grabbing) {
      setEndingY(e.changedTouches[0].clientX);
      setEndingX(e.changedTouches[0].clientY);

      const diffX = endingX - startingX;
      const diffY = endingY - startingY;

      setRotateX((rotateX + -diffX) / 2);
      setRotateY((rotateY + diffY) / 2);
    }
  };

  const touchEnd = (e: React.TouchEvent<HTMLElement>) => {
    setGrabbing(false);
  };

  return (
    <CubeContainer onMouseMove={(e) => mouseMove(e)}>
      <MainCube
        onMouseDown={(e) => mouseDown(e)}
        onTouchStart={(e) => touchStart(e)}
        onTouchMove={(e) => touchMove(e)}
        onTouchEnd={(e) => touchEnd(e)}
        onMouseUp={mouseUp}
        grabbing={grabbing}
        rotateX={rotateX}
        rotateY={rotateY}
        containerSize={containerWidth}
      >
        <Faces className="front" containerSize={containerWidth}>
          <Image width={80} height={80} src={reactLogo} alt="react" />
        </Faces>

        <Faces className="back" containerSize={containerWidth}>
          <Image width={80} height={80} src={jsLogo} alt="css" />
        </Faces>

        <Faces className="top" containerSize={containerWidth}>
          <Image width={80} height={80} src={cssLogo} alt="css" />
        </Faces>

        <Faces className="bottom" containerSize={containerWidth}>
          <Image width={80} height={80} src={tsLogo} alt="css" />
        </Faces>

        <Faces className="left" containerSize={containerWidth}>
          <Image width={80} height={80} src={nextLogo} alt="css" />
        </Faces>

        <Faces className="right" containerSize={containerWidth}>
          <Image width={80} height={80} src={nodeLogo} alt="css" />
        </Faces>

        <Faces className="shadow" containerSize={containerWidth}></Faces>
      </MainCube>
    </CubeContainer>
  );
};

export default Cube;

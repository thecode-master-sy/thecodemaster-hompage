"use client";

import { FlexContainer, Text } from "./styles/css.styled";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface workContainerProps {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  description: string;
}

const WorkContainer = ({
  id,
  thumbnail,
  title,
  description,
}: workContainerProps) => {
  return (
    <Link href={`/works/${id}`}>
      <FlexContainer className="direction-column work-container--responsive">
        <div className="image-container">
          <Image
            src={thumbnail}
            layout="fill"
            alt={`${thumbnail} image`}
            className="image border-rounded"
          />
        </div>
        <div className="text-center">
          <h3>{title}</h3>

          <Text className="mg-top-mid">{description}</Text>
        </div>
      </FlexContainer>
    </Link>
  );
};

export default WorkContainer;

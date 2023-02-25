"use client";

import { useState, useEffect } from "react";
import { personalData, workData } from "@/data/data";
import { StyledContainer, FlexContainer, Text } from "./styles/css.styled";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface WorkDataInterface {
  id: string;
  title: string;
  stack?: string;
  thumbnail?: StaticImageData;
  link?: string;
  description: string;
  images: StaticImageData[];
}

const WorkDetail = ({ id }: { id: string }) => {
  const [workObj, setObj] = useState<WorkDataInterface | null>(null);

  useEffect(() => {
    workData.map((data) => {
      if (data.id === id) {
        setObj(data);
      }
    });

    personalData.map((data) => {
      if (data.id === id) {
        setObj(data);
      }
    });
  }, []);

  return (
    <StyledContainer className="mg-top-large">
      <FlexContainer>
        <Link href={"/works"}>Works</Link>
        <span>
          <MdKeyboardArrowRight />
        </span>
        <span>{workObj?.title}</span>
      </FlexContainer>

      <div className="mg-top-mid">
        <Text>{workObj?.description}</Text>
      </div>

      <div className="mg-top-mid pd-inline-mid">
        <FlexContainer className="align-center">
          <span className="pd-block-small pd-inline-mid bg-primary-dark">
            Project
          </span>

          <span>{workObj?.title}</span>
        </FlexContainer>

        <FlexContainer className="align-center mg-top-mid">
          <span className="pd-block-small pd-inline-mid bg-primary-dark">
            Link
          </span>

          <a
            href={workObj?.link}
            target="_blank"
            style={{
              textDecoration: "underline",
            }}
          >
            {workObj?.link}
          </a>
        </FlexContainer>

        <FlexContainer className="align-center mg-top-mid">
          <span className="pd-block-small pd-inline-mid bg-primary-dark">
            Stack
          </span>

          <span>{workObj?.stack}</span>
        </FlexContainer>
      </div>

      <div>
        {workObj?.images.map((image, index) => (
          <div className="image-container mg-top-large" key={index}>
            <Image
              src={image}
              layout="fill"
              alt={`${image} image`}
              className="image border-rounded"
            />
          </div>
        ))}
      </div>
    </StyledContainer>
  );
};

export default WorkDetail;

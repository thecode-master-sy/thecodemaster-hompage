import {
  ResponsiveGrid,
  StyledContainer,
  Title,
} from "@/components/styles/css.styled";
import WorkContainer from "@/components/workContainer";
import { workData, personalData } from "@/data/data";

const Works = () => {
  return (
    <StyledContainer className="mg-top-large">
      <div>
        <Title>Works</Title>

        <ResponsiveGrid className="mg-top-mid">
          {workData.map((data, index) => (
            <WorkContainer
              key={index}
              id={data.id}
              title={data.title}
              thumbnail={data.thumbnail}
              description={data.description}
            />
          ))}
        </ResponsiveGrid>
      </div>

      <div className="mg-top-large">
        <Title>Personal Projects</Title>

        <ResponsiveGrid className="mg-top-mid">
          {personalData.map((data, index) => (
            <WorkContainer
              key={index}
              id={data.id}
              title={data.title}
              thumbnail={data.thumbnail}
              description={data.description}
            />
          ))}
        </ResponsiveGrid>
      </div>
    </StyledContainer>
  );
};

export default Works;

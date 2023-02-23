import { StyledContainer, Title } from "@/components/styles/css.styled";
import { workData } from "@/data/data";

export default function Page({ params }: { params: { work: string } }) {
  const { work } = params;

  return (
    <StyledContainer>
      <div>
        <Title>Work</Title>
        <span></span>
        <span>{work}</span>
      </div>
    </StyledContainer>
  );
}

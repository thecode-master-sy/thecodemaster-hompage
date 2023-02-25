import {
  FlexContainer,
  StyledContainer,
  Title,
} from "@/components/styles/css.styled";
import WorkDetail from "@/components/WorkDetail";
import { workData, personalData } from "@/data/data";

export default function Page({ params }: { params: { work: string } }) {
  const { work } = params;

  return <WorkDetail id={work} />;
}

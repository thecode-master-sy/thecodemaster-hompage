import Cube from "@/components/Cube";
import {
  FlexContainer,
  StyledContainer,
  Title,
  Text,
  GridContainer,
  ResponsiveGrid,
  Button,
  ImageFrame,
} from "@/components/styles/css.styled";
import { Container } from "@/components/utilis";
import Image from "next/image";
import Link from "next/link";
import Thecodemaster from "@/public/thecodemaster.jpg";
import NextLogo from "../public/next.svg";
import GithubLogo from "../public/github.svg";
import ReactLogo from "../public/react.svg";
import TypeScriptLogo from "../public/typescript-logo.svg";
import TwitterLogo from "../public/twitter.svg";
import InstagramLogo from "../public/instagram.svg";
import GmailLogo from "../public/gmail-icon.svg";
import { IoIosArrowDropright } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { TbBrandNextjs } from "react-icons/tb";
import Card from "@/components/Card";

export default function Home() {
  return (
    <StyledContainer className="mg-top-large">
      <section>
        <FlexContainer className="justify-center align-center">
          <div>
            <h1 className="fs-large">Nwaegerue Chinemerem</h1>
            <div className="mg-top-small">&#40; thecodemaster &#41;</div>
          </div>

          <ImageFrame>
            <Image
              src={Thecodemaster}
              alt="thecodemaster"
              fill
              objectFit="contain"
              objectPosition="center"
            />
          </ImageFrame>
        </FlexContainer>
      </section>

      <section className="mg-top-mid">
        <div className="bg-primary-dark pd-block-mid pd-inline-mid text-center border-rounded">
          <p
            style={{
              lineHeight: 1.6,
            }}
          >
            Hello, I am Nwaegerue Chinemerem, a Nigerian Developer
          </p>
        </div>
      </section>

      <section className="mg-top-large">
        <div>
          <Title>About</Title>

          <Text className="mg-top-mid">
            Nwaegerue Chinemerem is a fullstack developer who is very passionate
            about solving problems and being creative. He has a knack for
            creating awesome user Interfaces, and has worked with various
            companies as a freelancer, and remotely. Born in Umuahia, He
            currently lives in Abia State, Nigeria. Apart from programming, he
            loves nature, playing games, travelling and listening to 90's rap
            music, yo watsapp biyatch!
          </Text>
        </div>
      </section>

      <section className="mg-top-large">
        <div>
          <Title>Skills</Title>

          <Text className="mg-top-mid">Here are Some of My skills</Text>

          <div className="mg-top-mid">
            <ResponsiveGrid>
              <Card>
                <FlexContainer className="direction-column align-center">
                  <span>
                    <GoMarkGithub
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </span>
                  <span>Git Hub</span>
                </FlexContainer>

                <Text className="mg-top-mid text-center">
                  I have a lot of experience with version control with git
                </Text>
              </Card>

              <Card>
                <FlexContainer className="direction-column align-center">
                  <Image
                    width={60}
                    height={60}
                    src={ReactLogo}
                    alt={"React icon"}
                  />
                  <span>React</span>
                </FlexContainer>

                <Text className="mg-top-mid text-center">
                  I am very good with react and i have a knack for designing
                  awesome user interfaces
                </Text>
              </Card>

              <Card>
                <FlexContainer className="direction-column align-center">
                  <Image
                    width={60}
                    height={60}
                    src={TypeScriptLogo}
                    alt={"Typescript icon"}
                  />
                  <span>Typescript</span>
                </FlexContainer>

                <Text className="mg-top-mid text-center">
                  Typescript is a tool that helps detect errors faster and
                  easier, this is a tool i have in my arsenal
                </Text>
              </Card>

              <Card>
                <FlexContainer className="direction-column align-center">
                  <span>
                    <TbBrandNextjs
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                  </span>
                  <span>Next Js</span>
                </FlexContainer>

                <Text className="mg-top-mid text-center">
                  I am very familiar with the next js framework, and i am able
                  to provide a mini backend for any application with this
                </Text>
              </Card>
            </ResponsiveGrid>

            <FlexContainer className="mg-top-mid justify-center">
              <Link href="/works">
                <Button>
                  <div
                    style={{
                      display: "flex",
                      gap: "1em",
                    }}
                    className="align-center "
                  >
                    <span>My Projects</span>
                    <span className="flex align-center icon">
                      <IoIosArrowDropright />
                    </span>{" "}
                  </div>
                </Button>
              </Link>
            </FlexContainer>
          </div>
        </div>
      </section>

      <section className="mg-top-large">
        <div>
          <Title>On The Web</Title>

          <div className="mg-top-mid pd-top-mid">
            <a
              href="https://www.instagram.com/thecode_masster/"
              target={"_blank"}
            >
              <FlexContainer>
                <Image
                  width={20}
                  height={20}
                  src={InstagramLogo}
                  alt="instagram"
                />
                <span>Thecodemaster</span>
              </FlexContainer>
            </a>

            <a
              className="block mg-top-mid"
              href="https://twitter.com/thecode_master"
              target={"_blank"}
            >
              <FlexContainer>
                <Image width={20} height={20} src={TwitterLogo} alt="twitter" />

                <span>Thecodemaster</span>
              </FlexContainer>
            </a>

            <a
              href="https://github.com/thecode-master-sy"
              target={"_blank"}
              className="block mg-top-mid"
            >
              <FlexContainer>
                <GoMarkGithub />
                <span>Thecodemaster-sy</span>
              </FlexContainer>
            </a>
          </div>
        </div>
      </section>

      <section className="mg-top-large">
        <div className="flex align-center direction-column">
          <h2>Lets Work together</h2>
          <p className="mg-top-mid">Contact me at</p>
          <FlexContainer className="align-center pd-block-small pd-inline-small mg-top-mid bg-primary-dark border-rounded">
            <Image width={20} height={20} src={GmailLogo} alt="Email" />
            <a href="https://gmail.com">chinemeremnwaegerue@gmail.com</a>
          </FlexContainer>
        </div>
      </section>
    </StyledContainer>
  );
}

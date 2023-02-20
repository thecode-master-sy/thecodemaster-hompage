import Cube from "@/components/Cube";
import {
  FlexContainer,
  StyledContainer,
  Title,
  Text,
  GridContainer,
  ResponsiveGrid,
  Card,
} from "@/components/styles/css.styled";
import { Container } from "@/components/utilis";
import Image from "next/image";
import Thecodemaster from "../public/thecodemaster.jpg";
import NextLogo from "../public/next.svg";
import GithubLogo from "../public/github.svg";
import ReactLogo from "../public/react.svg";
import TypeScriptLogo from "../public/typescript-logo.svg";
import TwitterLogo from "../public/twitter.svg";
import InstagramLogo from "../public/instagram.svg";
import GmailLogo from "../public/gmail-icon.svg";

export default function Home() {
  return (
    <StyledContainer>
      <FlexContainer
        className="align-center justify-center"
        style={{
          minHeight: "90vh",
        }}
      >
        <Cube />
      </FlexContainer>

      <section>
        <FlexContainer className="justify-center align-center">
          <div>
            <h1 className="fs-large">Nwaegerue Chinemerem</h1>
            <div className="mg-top-small">&#40; thecodemaster &#41;</div>
          </div>

          <div
            style={{
              border: "2px solid rgba(0,0,0,0.5)",
              padding: "0.2em",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Image
              width={100}
              height={100}
              src={Thecodemaster}
              alt="thecodemaster"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
        </FlexContainer>
      </section>

      <section className="mg-top-mid">
        <div className="bg-primary-blue-dark pd-block-mid pd-inline-mid text-center border-rounded">
          <p>Hello, I am Nwaegerue Chinemerem, a Nigerian Developer</p>
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
                  <Image
                    width={60}
                    height={60}
                    src={GithubLogo}
                    alt={"github icon"}
                  />
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
                    src={NextLogo}
                    alt={"Next icon"}
                  />
                  <span>Next Js</span>
                </FlexContainer>

                <Text className="mg-top-mid text-center">
                  I am very familiar with the next js framework, and i am able
                  to provide a mini backend for any application with this
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
            </ResponsiveGrid>
          </div>
        </div>
      </section>

      <section className="mg-top-large">
        <div>
          <Title>On The Web</Title>

          <div className="mg-top-mid pd-top-mid">
            <a>
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

            <a className="block mg-top-mid">
              <FlexContainer>
                <Image width={20} height={20} src={TwitterLogo} alt="twitter" />

                <span>Thecodemaster</span>
              </FlexContainer>
            </a>

            <a
              href="https://github.com/thecodemaster-sy"
              target={"_blank"}
              className="block mg-top-mid"
            >
              <FlexContainer>
                <Image width={20} height={20} src={GithubLogo} alt="github" />

                <span>Thecodemaster-sy</span>
              </FlexContainer>
            </a>
          </div>
        </div>
      </section>
    </StyledContainer>
  );
}

"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  FlexContainer,
  StyledContainer,
  StyledNavbar,
  ThemeSwitch,
} from "./styles/css.styled";
import { MdOutlineLightMode } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-primary-blur pd-block-mid">
      {" "}
      <StyledContainer>
        <StyledNavbar>
          <Logo />

          <FlexContainer className="align-center">
            <ul className="capitalize">
              <li>
                <Link href={"/"}>about</Link>
              </li>
              <li>
                <Link href={"/works"}>works</Link>
              </li>
            </ul>

            <FlexContainer className="align-center" gap="0.5em">
              <GoMarkGithub /> <span>view souce code</span>
            </FlexContainer>

            <ThemeSwitch gap="0.5em">
              <MdOutlineLightMode />
              <span>Light Mode</span>
            </ThemeSwitch>
          </FlexContainer>
        </StyledNavbar>
      </StyledContainer>
    </div>
  );
};

export default Navbar;

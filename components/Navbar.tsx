"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  StyledContainer,
  StyledNavbar,
  ThemeSwitch,
} from "./styles/css.styled";
import { MdOutlineLightMode, MdReorder } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import { useState } from "react";
import { ThemeContextInterface, useTheme } from "./styles/theme/themeProvider";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const { updateMode } = useTheme() as ThemeContextInterface;

  const showNavbar = () => {
    setShowNav(!showNav);
  };

  const pathname = usePathname();

  return (
    <div
      className="bg-primary-blur"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5,
        paddingBlock: "0.3em",
      }}
    >
      <StyledContainer>
        <StyledNavbar
          className="position-relative"
          show={showNav ? true : false}
        >
          <Logo />

          <div>
            <div
              style={{
                fontSize: "2em",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.2)",
                padding: "0.4em",
                opacity: 0.7,
              }}
              className="flex align-center justify-center border-rounded hamburger"
              onClick={showNavbar}
            >
              <MdReorder />
            </div>

            <ul>
              <li>
                <Link
                  href={"/"}
                  className={`capitalize link ${pathname === "/" && "active"}`}
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={"/works"}
                  className={`capitalize link ${
                    (pathname === "/works" || pathname === `/works/[work]`) &&
                    "active"
                  }`}
                >
                  works
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/thecode-master-sy/thecodemaster-hompage.git"
                  target="_blank"
                  className="flex align-center"
                >
                  <GoMarkGithub />
                  <span className="mg-left-small">view source code</span>
                </a>
              </li>

              <li>
                <ThemeSwitch gap="0.5em" onClick={updateMode}>
                  <MdOutlineLightMode />
                  <span>light mode</span>
                </ThemeSwitch>
              </li>
            </ul>
          </div>
        </StyledNavbar>
      </StyledContainer>
    </div>
  );
};

export default Navbar;

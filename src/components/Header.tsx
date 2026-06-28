/** @format */

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../assets/FEYVIK-LOGO-BLACK.png";
import logo2 from "../assets/FEYVIK-LOGO-WHITE.png";

const NavWrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "$isscrolled",
})<{ $isscrolled: boolean }>`
  transition:
    background 0.3s ease,
    padding 0.3s ease;
  box-shadow: ${({ $isscrolled }) =>
    $isscrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  ul li button {
    padding: 0px;
    font-size: 16px;
    &:hover {
      color: #3d5afe;
      box-shadow: none;
      transform: none;
    }
  }

  .logo {
    width: 100px;
  }
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(20, 16, 12, 0.35);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.25s ease;
  z-index: 60;
`;

const Panel = styled.aside<{ $open: boolean; $isDark: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(420px, 86vw);
  background: ${({ $isDark }) => ($isDark ? "#000000" : "#ffffff")};
  z-index: 61;
  display: flex;
  flex-direction: column;
  padding: 28px 32px 32px;
  overflow-y: auto;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 380px) {
    padding: 24px 20px 28px;
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 28px;
  transition: background 0.2s ease;
  padding: 0px;
`;

const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  li a {
    font-size: 18px;
  }
`;

const CtaButton = styled.button`
  margin-top: 8px;
  width: 100%;
  background: #3d5afe;
  color: #ffffff;
  transition:
    background 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: #3d5afe;
  }

  &:active {
    transform: scale(0.98);
  }
`;

type HeaderProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

const Header = ({ aboutRef, projectRef, contactRef }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>,
    section: "about" | "projects" | "contact",
  ) => {
    setMenuOpen(false);

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  const [isDark, setIsDark] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.setAttribute("data-scroll-locked", "");
    } else {
      document.body.removeAttribute("data-scroll-locked");
    }

    return () => {
      document.body.removeAttribute("data-scroll-locked");
    };
  }, [menuOpen]);

  const DarkModeToggle = () => (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className="dark_mode_toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon text-secondary-gold">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun text-secondary-gold">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      )}
    </button>
  );

  return (
    <>
      <NavWrapper
        $isscrolled={isScrolled}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={isDark ? logo2 : logo} alt="logo" width={130} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center justify-center md:hidden border-[#3f09c9]"
            aria-label="Toggle navigation menu">
            <FeatherIcon
              icon="align-left"
              style={{
                cursor: "pointer",
                width: "30px",
                height: "30px",
              }}
            />
          </button>

          <div className="hidden w-full md:block md:w-auto ms-auto">
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li className="text-gray-600 dark:text-white">
                <button onClick={() => scrollToSection(aboutRef, "about")}>
                  About
                </button>
              </li>
              <li className="text-gray-600 dark:text-white">
                <button onClick={() => scrollToSection(projectRef, "projects")}>
                  Projects
                </button>
              </li>
              <li className="text-gray-600 dark:text-white">
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li className="text-gray-600 dark:text-white">
                <Link to={"/work"}>Work</Link>
              </li>
              <li className="text-gray-600 dark:text-white">
                <Link to={"/design"}>Design</Link>
              </li>
              <li className="text-gray-600 dark:text-white">
                <button onClick={() => scrollToSection(contactRef, "contact")}>
                  Contact
                </button>
              </li>
              <li className="text-gray-600 dark:text-white">
                <DarkModeToggle />
              </li>
            </ul>
          </div>
        </div>
      </NavWrapper>

      <Overlay
        $open={menuOpen}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <Panel
        id="mobile-sidebar"
        $open={menuOpen}
        $isDark={isDark}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <FeatherIcon
            icon="x"
            size={18}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
        </CloseButton>

        <MobileNav>
          <li className="mb-4 text-gray-600 dark:text-white">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="mb-4 text-gray-600 dark:text-white">
            <button onClick={() => scrollToSection(aboutRef, "about")}>
              About
            </button>
          </li>
          <li className="mb-4 text-gray-600 dark:text-white">
            <button onClick={() => scrollToSection(projectRef, "projects")}>
              Projects
            </button>
          </li>
          <li className="mb-4 text-gray-600 dark:text-white">
            <Link to={"/design"} onClick={() => setMenuOpen(false)}>
              Design
            </Link>
          </li>
          <li className="mb-4 text-gray-600 dark:text-white">
            <button
              style={{ fontFamily: '"Source Serif 4", serif' }}
              onClick={() => scrollToSection(contactRef, "contact")}>
              Contact
            </button>
          </li>
          <li className="mb-4 text-gray-600 dark:text-white">
            <DarkModeToggle />
          </li>
        </MobileNav>

        <CtaButton onClick={() => scrollToSection(contactRef, "contact")}>
          Work with me
        </CtaButton>
      </Panel>
    </>
  );
};

export default Header;

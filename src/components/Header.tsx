/** @format */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../assets/logo-white.svg";

const NavWrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "isscrolled",
})<{ $isscrolled: boolean }>`
  background: ${({ $isscrolled }) => ($isscrolled ? "#2797FA" : "")};
  position: ${({ $isscrolled }) => ($isscrolled ? "fixed" : "")};
  z-index: ${({ $isscrolled }) => ($isscrolled ? "1" : "auto")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: ${({ $isscrolled }) => ($isscrolled ? "fixed" : "absolute")};
  top: ${({ $isscrolled }) => ($isscrolled ? "0" : "20px")};
  left: 0;
  z-index: 100;
  transition: background 0.3s ease, padding 0.3s ease;
  box-shadow: ${({ $isscrolled }) =>
    $isscrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  .container {
    background: ${({ $isscrolled }) => ($isscrolled ? "" : "#2797FA")};
    a {
      color: ${({ $isscrolled }) =>
        $isscrolled ? "#F9FAFB !important" : "#F9FAFB !important"};
    }
    height: 72px;
  }

  .logo {
    width: 100px;
  }

  .dark_mode_toggle {
    height: 40px;
    width: 40px;
    padding: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }

  @media (max-width: 1123px) {
    top: 0px;
    .container {
      max-width: 100% !important;
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <NavWrapper $isscrolled={isScrolled}>
      <div className="container px-[2.6rem]">
        <div className="flex flex-wrap items-center justify-between mx-auto h-full">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} alt="logo" width={120}/>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center btn_menu justify-center md:hidden border-[#3f09c9]"
            aria-controls="navbar-default">
            <FeatherIcon
              icon="align-left"
              style={{ color: "#ff4d00", cursor: "pointer" }}
            />
          </button>
          <div className="hidden w-full md:block md:w-auto ms-auto">
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Blog</Link>
              </li>
              <li>
                {isDark ? (
                  <button
                    type="button"
                    onClick={() => setIsDark(!isDark)}
                    className="dark_mode_toggle">
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
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsDark(!isDark)}
                    className="dark_mode_toggle">
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
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Header;

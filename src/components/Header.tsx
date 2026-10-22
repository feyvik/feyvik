/** @format */

import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logoBlack from "../assets/FEYVIK-LOGO-BLACK.png";
import logoWhite from "../assets/FEYVIK-LOGO-WHITE.png";

const NavWrapper = styled.nav.withConfig({
  shouldForwardProp: (prop) => !["$isscrolled", "$dark"].includes(prop),
})<{ $isscrolled: boolean; $dark: boolean }>`
  transition: background 0.3s ease, box-shadow 0.3s ease;
  background: ${({ $isscrolled, $dark }) =>
    $isscrolled
      ? $dark
        ? "rgba(13,13,13,0.9)"
        : "rgba(248,248,246,0.92)"
      : "transparent"};
  box-shadow: ${({ $isscrolled }) =>
    $isscrolled ? "0 1px 0 var(--border)" : "none"};
  backdrop-filter: ${({ $isscrolled }) =>
    $isscrolled ? "blur(14px)" : "none"};

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5vw;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .logo img {
    height: 26px;
    width: auto;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }

    li a,
    li button {
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-2);
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.2s ease;

      &:hover {
        color: var(--accent) !important;
        box-shadow: none;
        transform: none;
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .theme-btn {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text-2);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

    &:hover {
      background: var(--bg-3) !important;
      border-color: var(--accent);
      color: var(--accent);
      box-shadow: none;
      transform: none;
    }
  }

  .nav-cta {
    font-size: 0.8rem !important;
    font-weight: 600 !important;
    color: var(--bg) !important;
    background: var(--text) !important;
    padding: 0.5rem 1.25rem !important;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease !important;

    @media (max-width: 768px) {
      display: none;
    }

    &:hover {
      background: var(--accent) !important;
      box-shadow: 0 4px 16px rgba(61, 90, 254, 0.25) !important;
      transform: none !important;
      color: #fff !important;
    }
  }

  .menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--text-2);
    cursor: pointer;
    padding: 0.25rem;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
    }

    &:hover {
      color: var(--accent);
      box-shadow: none;
      transform: none;
    }
  }
`;

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.25s ease;
  z-index: 60;
  backdrop-filter: blur(4px);
`;

const Panel = styled.aside<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(340px, 85vw);
  background: var(--bg-2);
  border-left: 1px solid var(--border);
  z-index: 61;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);

  .panel-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  .panel-close {
    background: none;
    border: none;
    color: var(--text-3);
    cursor: pointer;
    padding: 0;

    &:hover {
      color: var(--text);
      box-shadow: none;
      transform: none;
    }
  }

  .panel-links {
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;

    li {
      border-bottom: 1px solid var(--border);
      &:first-child { border-top: 1px solid var(--border); }
    }

    li a,
    li button {
      display: block;
      width: 100%;
      text-align: left;
      font-size: 1.05rem;
      font-weight: 500;
      color: var(--text-2);
      padding: 1rem 0;
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: color 0.2s ease, padding-left 0.2s ease;

      &:hover {
        color: var(--text) !important;
        padding-left: 0.4rem;
        box-shadow: none;
        transform: none;
      }
    }
  }

  .panel-cta {
    margin-top: 2rem;
    width: 100%;
    background: var(--text);
    color: var(--bg);
    font-weight: 600;
    font-size: 0.85rem;
    border-radius: 100px;
    border: none;
    transition: background 0.2s ease;

    &:hover {
      background: var(--accent) !important;
      color: #fff !important;
      box-shadow: none;
      transform: none;
    }
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
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.setAttribute("data-scroll-locked", "");
    } else {
      document.body.removeAttribute("data-scroll-locked");
    }
    return () => document.body.removeAttribute("data-scroll-locked");
  }, [menuOpen]);

  return (
    <>
      <NavWrapper $isscrolled={isScrolled} $dark={isDark} className="fixed top-0 left-0 right-0 z-50">
        <div className="nav-inner">
          <Link to="/" className="logo">
            <img src={isDark ? logoWhite : logoBlack} alt="Feyvik" />
          </Link>

          <ul className="nav-links">
            <li><button onClick={() => scrollToSection(aboutRef, "about")}>About</button></li>
            <li><button onClick={() => scrollToSection(projectRef, "projects")}>Projects</button></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/design">Design</Link></li>
          </ul>

          <div className="nav-right">
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
              <FeatherIcon icon={isDark ? "sun" : "moon"} size={16} />
            </button>

            <button
              className="nav-cta"
              onClick={() => scrollToSection(contactRef, "contact")}>
              Contact
            </button>

            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu">
              <FeatherIcon icon={menuOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </NavWrapper>

      <Overlay $open={menuOpen} onClick={() => setMenuOpen(false)} />

      <Panel $open={menuOpen} role="dialog" aria-modal="true">
        <div className="panel-top">
          <img src={isDark ? logoWhite : logoBlack} alt="Feyvik" style={{ height: 22 }} />
          <button className="panel-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <FeatherIcon icon="x" size={20} />
          </button>
        </div>

        <ul className="panel-links">
          <li><button onClick={() => scrollToSection(aboutRef, "about")}>About</button></li>
          <li><button onClick={() => scrollToSection(projectRef, "projects")}>Projects</button></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link to="/design" onClick={() => setMenuOpen(false)}>Design</Link></li>
        </ul>

        <button
          className="panel-cta"
          onClick={() => scrollToSection(contactRef, "contact")}>
          Work With Me
        </button>
      </Panel>
    </>
  );
};

export default Header;

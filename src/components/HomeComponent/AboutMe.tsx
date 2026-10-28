/** @format */

import styled from "styled-components";
import { Link } from "react-router";
import { ArrowRight } from "feather-icons-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AvatarTag from "../AvatarTag";
import img from "../../assets/IMG.jpg";

const AboutWrapper = styled.section`
  padding: 7rem 6vw;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  .section-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
    display: block;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 6vw;
    align-items: start;
    max-width: 1100px;
    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .left {
    position: sticky;
    top: 100px;

    @media (max-width: 768px) {
      position: static;
    }

    h2 {
      margin-bottom: 1.25rem;

      em {
        font-style: italic;
        color: var(--accent);
      }
    }

    .read-link {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
      letter-spacing: 0.04em;
      transition: gap 0.2s ease;

      &:hover {
        gap: 11px;
        color: var(--accent) !important;
      }
    }
  }

  .right {
    p {
      font-size: 1rem;
      line-height: 1.8;
      color: var(--text-2);
      margin-bottom: 1.25rem;
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 2rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }

    .stat {
      background: var(--bg-2);
      padding: 1.5rem 1.25rem;
      transition: background 0.2s ease;

      &:hover {
        background: var(--surface);
      }

      .num {
        font-family: "Cormorant Garamond", serif;
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--accent);
        line-height: 1;
        margin-bottom: 0.4rem;
      }

      .lbl {
        font-size: 0.75rem;
        color: var(--text-3);
        line-height: 1.4;
      }
    }
  }

  .skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.5rem;

    span {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.72rem;
      padding: 0.35rem 0.875rem;
      border-radius: 4px;
      background: var(--surface);
      border: 1px solid var(--border);
      color: var(--text-2);
      transition: border-color 0.2s ease, color 0.2s ease;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
    }
  }
`;

const SKILLS = ["Angular", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "React (learning)", "Figma", "Brand Design"];

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

const AboutMe = ({ aboutRef }: SectionsProps) => {
  const animRef = useScrollAnimation();

  return (
    <AboutWrapper ref={aboutRef}>
      <div ref={animRef} className="animate-on-scroll">
        <div className="about-grid">
          <div className="left">
            <AvatarTag src={img} tag="// about_me" className="mb-5" />
            <h2>
              Building with <br />
              purpose & <em>craft.</em>
            </h2>
            <Link to="/profile" className="read-link">
              Full profile <ArrowRight size={14} />
            </Link>
          </div>

          <div className="right">
            <p>
              Frontend developer with a strong focus on Angular, TypeScript, and
              Tailwind CSS — building responsive, well-structured web applications
              that are clean under the hood and polished on the surface. I also
              work with Bootstrap and vanilla JavaScript for flexible,
              cross-project solutions.
            </p>
            <p>
              Beyond code, I'm actively learning brand design — exploring how
              visual identity, typography, and layout decisions shape how people
              experience a product. Currently growing my React skills to round
              out a full modern frontend stack.
            </p>

            <div className="stats">
              <div className="stat">
                <div className="num">5+</div>
                <div className="lbl">Frameworks & Libraries</div>
              </div>
              <div className="stat">
                <div className="num">Angular</div>
                <div className="lbl">Primary Framework</div>
              </div>
              <div className="stat">
                <div className="num">∞</div>
                <div className="lbl">Always Learning</div>
              </div>
            </div>

            <div className="skills">
              {SKILLS.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutMe;

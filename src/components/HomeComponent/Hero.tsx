/** @format */
import styled from "styled-components";
import img from "../../assets/KELV2738.jpg";
import { useNavigate } from "react-router-dom";

const HeroWrapper = styled.section`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 110px 6vw 5rem;
  background: var(--bg);
  position: relative;
  overflow: hidden;

  /* subtle dot grid */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 32px 32px;
    pointer-events: none;
    opacity: 0.6;
  }

  /* bottom fade */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to bottom, transparent, var(--bg));
    pointer-events: none;
  }

  .inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* photo */
  .photo-ring {
    position: relative;
    width: clamp(140px, 22vw, 210px);
    height: clamp(140px, 22vw, 210px);
    margin-bottom: 2.25rem;

    &::before {
      content: "";
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      border: 1.5px dashed var(--accent);
      opacity: 0.35;
      animation: spin 18s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      inset: -3px;
      border-radius: 50%;
      border: 1.5px solid var(--border);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 50%;
      border: 3px solid var(--bg-2);
      box-shadow: 0 16px 48px rgba(0,0,0,0.15);
    }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* availability badge */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 5px 14px;
    border-radius: 100px;
    background: var(--surface);
    border: 1px solid var(--border);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--text-2);
    margin-bottom: 1.25rem;

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
      animation: pulse 2s ease-in-out infinite;
    }
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0.08); }
  }

  /* role tags */
  .roles {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem 1rem;
    margin-bottom: 1.75rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: var(--accent);

    .sep {
      color: var(--border);
      user-select: none;
    }
  }

  h1.name {
    margin-bottom: 1.25rem;
    max-width: 780px;

    em {
      font-style: italic;
      color: var(--accent);
    }
  }

  .desc {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text-2);
    max-width: 500px;
    margin: 0 auto 2.5rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
    justify-content: center;
  }

  .btn-solid {
    background: var(--text);
    color: var(--bg);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 0.8rem 2rem;
    border-radius: 6px;
    border: 1.5px solid var(--text);
    transition: background 0.2s ease, color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;

    &:hover {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(61, 90, 254, 0.28);
    }
  }

  .btn-ghost {
    background: transparent;
    color: var(--text-2);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 0.8rem 2rem;
    border-radius: 6px;
    border: 1.5px solid var(--border);
    transition: border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
      transform: translateY(-2px);
    }
  }

  /* quick stats */
  .stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 3.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
    justify-content: center;

    .stat {
      text-align: center;

      .num {
        font-family: "Cormorant Garamond", serif;
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--text);
        line-height: 1;
        margin-bottom: 0.3rem;
      }
      .lbl {
        font-size: 0.72rem;
        color: var(--text-3);
        letter-spacing: 0.04em;
      }
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroWrapper>
      <div className="inner">
        <div className="photo-ring hero-image-enter">
          <img src={img} alt="Favour Vivian" fetchPriority="high" />
        </div>

        <div className="badge hero-enter">
          <span className="dot" />
          Available for new projects
        </div>

        <div className="roles hero-enter hero-enter-delay-1">
          <span>Frontend Engineer</span>
          <span className="sep">/</span>
          <span>UI Designer</span>
          <span className="sep">/</span>
          <span>Community Builder</span>
        </div>

        <h1 className="name hero-enter hero-enter-delay-1">
          Developing & Designing <br />
          <em>With Clarity.</em>
        </h1>

        <p className="desc hero-enter hero-enter-delay-2">
          Frontend engineer with 4+ years building scalable, AI-assisted web
          applications. I bridge the gap between engineering and design —
          and open doors for the next generation of African developers.
        </p>

        <div className="actions hero-enter hero-enter-delay-3">
          <button
            className="btn-solid"
            onClick={() => navigate("/", { state: { scrollTo: "about" } })}>
            About Me
          </button>
          <button
            className="btn-ghost"
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}>
            Work With Me
          </button>
        </div>

        <div className="stats hero-enter hero-enter-delay-3">
          <div className="stat">
            <div className="num">8+</div>
            <div className="lbl">Years experience</div>
          </div>
          <div className="stat">
            <div className="num">50+</div>
            <div className="lbl">Projects delivered</div>
          </div>
          <div className="stat">
            <div className="num">100+</div>
            <div className="lbl">Lives impacted</div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

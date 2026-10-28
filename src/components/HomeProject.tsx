/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectImage, type Image } from "./ImageCard";
import FeatherIcon, { ArrowRight } from "feather-icons-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import AvatarTag from "./AvatarTag";
import avatarImg from "../assets/KELV2726.jpg";

const STACK = ["Angular","TypeScript","JavaScript","Tailwind CSS","Bootstrap","React","HTML5","CSS3","Affinity by Canva"];

const ProjectWrapper = styled.section`
  padding: 7rem 6vw;
  background: var(--bg);

  .section-header {
    max-width: 1100px;
    margin: 0 auto 3.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    .left {
      .tag {
        font-family: "JetBrains Mono", monospace;
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--accent);
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
        display: block;
      }
      h2 {
        margin: 0;
        em { font-style: italic; color: var(--accent); }
      }
    }

    .view-all {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-3);
      text-decoration: none;
      letter-spacing: 0.04em;
      white-space: nowrap;
      transition: color 0.2s ease, gap 0.2s ease;

      &:hover {
        color: var(--accent) !important;
        gap: 11px;
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.25rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4 / 3;
    background: var(--bg-3);
    cursor: pointer;
    border: 1px solid var(--border);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%);
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .card-title {
      font-family: "Cormorant Garamond", serif;
      font-size: 1.1rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .card-cta {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      color: rgba(255,255,255,0.6);
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      transform: translateY(6px);
      opacity: 0;
      transition: all 0.25s ease 0.04s;

      &:hover { color: #fff !important; }
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.14);

      img { transform: scale(1.04); }
      .overlay { opacity: 1; }
      .card-cta { opacity: 1; transform: translateY(0); }
    }
  }

  .tech-section {
    max-width: 1100px;
    margin: 4rem auto 0;
    padding-top: 2.5rem;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    .tech-label {
      font-family: "JetBrains Mono", monospace;
      font-size: 0.68rem;
      font-weight: 500;
      color: var(--text-3);
      letter-spacing: 0.06em;
      white-space: nowrap;
    }

    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .pill {
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.35rem 0.875rem;
      border-radius: 4px;
      border: 1px solid var(--border);
      color: var(--text-2);
      background: var(--surface);
      transition: border-color 0.2s ease, color 0.2s ease;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
    }
  }
`;

type SectionsProps = {
  projectRef?: React.RefObject<HTMLDivElement | null>;
  projectNumber?: number;
};

const HomeProject = ({ projectRef, projectNumber }: SectionsProps) => {
  const animRef = useScrollAnimation();
  const [modal, setModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState<Image>({ id:0, image:"", name:"", description:"", link:"" });

  const handleSubmit = (info: Image) => { setModal(true); setProjectInfo(info); };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [modal]);

  return (
    <ProjectWrapper ref={projectRef}>
      <div ref={animRef} className="animate-on-scroll">
        <div className="section-header">
          <div className="left">
            <AvatarTag src={avatarImg} tag="// selected_works" className="mb-4" />
            <h2>Projects that <em>speak.</em></h2>
          </div>
          {projectNumber && projectNumber < ProjectImage.length && (
            <Link to="/work" className="view-all">
              View all <ArrowRight size={13} />
            </Link>
          )}
        </div>

        <div className="grid">
          {ProjectImage.slice(0, projectNumber).map((image: Image) => (
            <div key={image.id} className="card">
              <img src={image.image} alt={image.name} loading="lazy" />
              <div className="overlay">
                <p className="card-title">{image.name}</p>
                <button type="button" className="card-cta" onClick={() => handleSubmit(image)}>
                  View project <FeatherIcon icon="arrow-right" size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-section">
          <span className="tech-label">Stack</span>
          <div className="pills">
            {STACK.map((s) => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
      </div>

      {modal && <ProjectModal handleSetModal={setModal} projectData={projectInfo} />}
    </ProjectWrapper>
  );
};

export default HomeProject;

type modalPreviewProps = {
  handleSetModal: (v: boolean) => void;
  projectData: Image;
};

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
`;

const ModalBox = styled.div`
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  max-width: 520px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.25);
  position: relative;

  .modal-close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 5;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(0,0,0,0.3);
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease;

    &:hover { background: rgba(0,0,0,0.5) !important; }
  }

  .modal-image {
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;

    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .modal-body {
    padding: 1.5rem;

    h5 {
      font-size: 1.25rem;
      font-family: "Cormorant Garamond", serif;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 0.9rem;
      color: var(--text-2);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .modal-actions {
      display: flex;
      gap: 0.75rem;

      a.btn-view {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        padding: 0.75rem;
        background: var(--accent);
        color: #fff;
        border-radius: 6px;
        font-size: 0.82rem;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s ease;

        &:hover { background: #5570ff !important; color: #fff !important; }
      }

      button.btn-close {
        padding: 0.75rem 1.25rem;
        background: var(--surface);
        color: var(--text-2);
        border: 1px solid var(--border);
        border-radius: 6px;
        font-size: 0.82rem;
        cursor: pointer;
        transition: border-color 0.2s ease;

        &:hover { border-color: var(--accent); }
      }
    }
  }
`;

const ProjectModal = ({ handleSetModal, projectData }: modalPreviewProps) => (
  <ModalOverlay onClick={() => handleSetModal(false)}>
    <ModalBox onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => handleSetModal(false)} aria-label="Close">
        <FeatherIcon icon="x" size={16} />
      </button>
      {projectData && (
        <>
          <div className="modal-image">
            <img src={projectData.image} alt={projectData.name} />
          </div>
          <div className="modal-body">
            <h5>{projectData.name}</h5>
            <p>{projectData.description}</p>
            <div className="modal-actions">
              <Link to={projectData.link} target="_blank" className="btn-view">
                View Project <FeatherIcon icon="external-link" size={13} />
              </Link>
              <button className="btn-close" onClick={() => handleSetModal(false)}>Close</button>
            </div>
          </div>
        </>
      )}
    </ModalBox>
  </ModalOverlay>
);

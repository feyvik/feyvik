/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/IMG_7598.jpg";
import { ProjectImage, type Image } from "./ImageCard";
import FeatherIcon, { ArrowRight } from "feather-icons-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ProjectWrapper = styled.div`
  .avatar-frame {
    position: relative;
    width: 96px;
    height: 96px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.15);
      pointer-events: none;
    }
  }

  .project-card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    background: #f4f4f6;
    aspect-ratio: 4 / 3;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.06);
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(13, 13, 16, 0.85) 0%,
        rgba(13, 13, 16, 0.15) 55%,
        rgba(13, 13, 16, 0) 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px;
      color: white;
    }

    &:hover .overlay {
      opacity: 1;
    }

    .overlay-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-weight: 500;
      color: white;
      margin-top: 6px;
      transform: translateY(8px);
      opacity: 0;
      transition: all 0.3s ease;
    }

    &:hover .overlay-link {
      transform: translateY(0);
      opacity: 1;
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
  const [projectInfo, setProjectInfo] = useState<Image>({
    id: 0,
    image: "",
    name: "",
    description: "",
    link: "",
  });

  const handleSubmit = (projectInfo: Image) => {
    setModal(true);
    setProjectInfo(projectInfo);
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [modal]);

  return (
    <ProjectWrapper ref={projectRef} className="py-24 px-6">
      <div ref={animRef} className="animate-on-scroll max-w-6xl mx-auto">
        <a
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-10 dark:text-white"
          href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left w-4 h-4">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Back to Home
        </a>

        <div className="flex items-center gap-5 mb-6">
          <div className="avatar-frame shadow-2xl rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/10">
            <img src={img} alt="profile" loading="lazy" />
          </div>
          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase">
            Selected Works
          </p>
        </div>

        <h2 className="mb-4 leading-tight dark:text-white">
          Check Out Some of My Works
        </h2>

        <p className="text-gray-600 max-w-2xl leading-relaxed mb-4 dark:text-white">
          I've worked on a variety of projects, ranging from landing pages, web
          apps, real estate projects, and side projects. Here are a few of my
          favorites.
        </p>

        {projectNumber && projectNumber < ProjectImage.length && (
          <p className="mb-4">
            <Link to={"/projects"} className="text-[#3D5AFE]">
              View more <ArrowRight className="inline-block ml-1" />
            </Link>
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectImage.slice(0, projectNumber).map((image: Image) => (
            <div key={image.id} className="project-card">
              <img src={image.image} alt={image.name} loading="lazy" />
              <div className="overlay">
                <p className="font-medium text-base">{image.name}</p>
                <button
                  type="button"
                  onClick={() => handleSubmit(image)}
                  className="overlay-link">
                  View project
                  <FeatherIcon icon="external-link" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <ProjectModal handleSetModal={setModal} projectData={projectInfo} />
      )}
    </ProjectWrapper>
  );
};

export default HomeProject;

type modalPreviewProps = {
  handleSetModal: (value: boolean) => void;
  projectData: Image;
};

const ProjectModal = ({ handleSetModal, projectData }: modalPreviewProps) => {
  const handleStateReset = () => {
    handleSetModal(false);
  };

  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      onClick={handleStateReset}
      className="fixed inset-0 z-[110] w-full h-full flex items-center justify-center bg-black/80 px-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white dark:bg-dark rounded-2xl overflow-hidden shadow-2xl">
        <button
          type="button"
          style={{ padding: 0 }}
          onClick={handleStateReset}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors">
          <FeatherIcon icon="x" size={18} />
        </button>

        {projectData && (
          <>
            <div className="w-full aspect-video bg-gray-100">
              <img
                src={projectData.image}
                alt={projectData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-3">
              <h5 className="text-xl leading-tight">{projectData.name}</h5>
              <p className="text-base leading-relaxed text-gray-600 dark:text-white">
                {projectData.description}
              </p>
            </div>

            <div className="flex items-stretch">
              <Link
                to={projectData.link}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 text-white bg-[#2D1B69] transition-colors">
                View Details
                <FeatherIcon icon="external-link" size={15} />
              </Link>
              <button
                type="button"
                onClick={handleStateReset}
                className="flex-1 flex items-center justify-center py-3.5 font-medium text-gray-600 dark:text-white transition-colors">
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

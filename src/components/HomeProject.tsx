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
        rgba(45, 27, 105, 0.92) 0%,
        rgba(45, 27, 105, 0.2) 55%,
        transparent 100%
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

const STACK = [
  {
    name: "HTML5",
    color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.234 0 .408.048.51.075.764.442.932 2.515.476 5.239a29.303 29.303 0 0 1-.617 2.507 29.04 29.04 0 0 0-2.522-.676A29.03 29.03 0 0 0 12 8.51a28.348 28.348 0 0 0-1.822 1.688 28.765 28.765 0 0 1-2.517.67c-.163-.52-.312-1.05-.437-1.582-.51-2.214-.492-4.076.04-4.389.12-.067.304-.1.533-.1 1.004 0 2.606.735 4.32 2.166 1.712-1.43 3.315-2.165 4.32-2.165zm-9.292 6.535a28.852 28.852 0 0 1 1.516-.62c-.166.55-.312 1.104-.435 1.658-.43-.493-.842-.986-1.081-1.038zm9.29 0c-.24.052-.651.545-1.082 1.04a28.808 28.808 0 0 0-.434-1.658 29.07 29.07 0 0 1 1.516.618zM12 9.76a28.17 28.17 0 0 1 2.169 1.844A28.18 28.18 0 0 1 12 13.456a28.17 28.17 0 0 1-2.17-1.855A28.17 28.17 0 0 1 12 9.76zm-6.861 2.244c.37-.116.753-.225 1.145-.328a28.65 28.65 0 0 0 .437 1.661 28.655 28.655 0 0 0-1.144-.327 29.31 29.31 0 0 1-.438-1.006zm13.722 0a29.31 29.31 0 0 1-.438 1.006 28.655 28.655 0 0 0-1.144.327 28.65 28.65 0 0 0 .437-1.661c.392.103.775.212 1.145.328zM5.14 15.395c.44 2.723.272 4.797-.492 5.239-.102.027-.277.075-.51.075-1.004 0-2.607-.735-4.32-2.165 1.712 1.43 3.315 2.165 4.32 2.165zm13.72 0c1.004 0 2.607.735 4.32 2.165-1.712-1.43-3.315-2.165-4.32-2.165-.234 0-.408.048-.51.075-.764-.442-.932-2.516-.492-5.24a29.17 29.17 0 0 1 1.002 2.965z" />
      </svg>
    ),
  },
  {
    name: "Angular",
    color: "#DD0031",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.247 1.726-14.771L12 0zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    color: "#FFCA28",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
      </svg>
    ),
  },
  {
    name: "Leaflet",
    color: "#199900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12.2 0C8.44.004 5.91 2.17 5.91 5.29c0 5.57 6.29 12.72 6.29 12.72s6.29-7.15 6.29-12.72C18.49 2.17 15.96 0 12.2 0zm0 7.8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        <ellipse cx="12" cy="21.5" rx="6" ry="2.5" opacity=".3" />
      </svg>
    ),
  },
];

const TechStack = () => (
  <div className="mt-14 pt-10 border-t border-gray-100 dark:border-white/10">
    <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-6">
      Tech Stack
    </p>
    <div className="flex flex-wrap gap-3">
      {STACK.map(({ name, color, icon }) => (
        <div
          key={name}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 hover:border-[#3D5AFE]/40 hover:shadow-sm transition-all duration-200"
          style={{ color }}>
          {icon}
          <span className="text-sm text-dark dark:text-light">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

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
        <div className="flex items-center gap-5 mb-6">
          <div className="avatar-frame shadow-2xl rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/10">
            <img src={img} alt="profile" loading="lazy" />
          </div>
          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase">
            Selected Works
          </p>
        </div>

        <h2 className="mb-4 leading-tight dark:text-light">
          Check Out Some of My Works
        </h2>

        <p className="text-gray-600 max-w-2xl leading-relaxed mb-4 dark:text-white">
          I've worked on a variety of projects, ranging from landing pages, web
          apps, real estate projects, and side projects. Here are a few of my
          favorites.
        </p>

        {projectNumber && projectNumber < ProjectImage.length && (
          <p className="mb-4">
            <Link
              to={"/projects"}
              className="inline-flex items-center gap-1 text-[#3D5AFE] hover:underline text-sm">
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

        <TechStack />
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
        className="relative w-full max-w-xl bg-light bg-linear-to-b dark:from-dark-start dark:to-dark-end rounded-2xl overflow-hidden shadow-2xl">
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
            <div className="w-full">
              <img
                src={projectData.image}
                alt={projectData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-3">
              <h5 className="text-xl leading-tight">{projectData.name}</h5>
              <p className="text-base leading-relaxed">
                {projectData.description}
              </p>
            </div>

            <div className="flex items-stretch">
              <Link
                to={projectData.link}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 text-light bg-[#2D1B69] transition-colors">
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

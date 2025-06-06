/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/home/me3.jpg";
import { ProjectImage, type Image } from "./ImageCard";
import FeatherIcon from "feather-icons-react";

const ProjectWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px 0px;

  h1 {
    font-size: 50px;
  }

  .project_content {
    min-height: 60vh;
    width: 100%;

    fieldset {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;

      figcaption {
        position: absolute;
        left: 40px;
        z-index: 3;
        h2 {
          font-size: 40px;
        }
      }

      .image-container {
        width: 200px;
        height: 200px;
      }

      img {
        object-fit: cover;
        vertical-align: bottom;
        margin: 0;
        padding: 0;
        object-position: top;
        height: 100%;
        width: 100%;
      }

      .image-container::after {
        content: "";
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
        pointer-events: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        left: 0;
      }
    }
  }

  .img_content {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .img_content::before {
    content: "";
    display: block;
    background-color: hsla(0, 0%, 8%, 1);
    width: 100%;
    height: 100%;
    transition: all, 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .img_content:hover::before {
    opacity: 1;
    visibility: visible;
  }

  .img_name {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    font-size: 20px;
    text-align: center;
    transition: opacity 0.5s ease;
    flex-direction: column;
  }

  .img_content:hover .img_name {
    opacity: 1;
  }
`;

type SectionsProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const HomeProject = ({ projectRef }: SectionsProps) => {
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
    <ProjectWrapper ref={projectRef}>
      <div className="container">
        <div className="project_content">
          <div className="mb-6">
            <fieldset>
              <figcaption className="text-primary mb-8">
                <h2 className="font-heading">Selected Works.</h2>
              </figcaption>
              <div className="mb-8 image-container">
                <img
                  src={img}
                  alt="image description"
                  className="rounded-full"
                />
              </div>
            </fieldset>
            <h2 className="mb-3 text-secondary dark:text-white">
              Check Out Some of My Works.
            </h2>
            <p>
              I've worked on a variety of projects, ranging from landing pages,
              web apps, <br className="hidden sm:block" /> real estate project,
              and side projects. Here are a few of my favorites.
            </p>
          </div>
          <div className="text-left">
            <div className="grid grid-cols-2">
              {ProjectImage.map((img: Image) => (
                <>
                  <div key={img.id} className="img_content">
                    <img
                      className="h-auto max-w-full"
                      src={img.image}
                      alt={img.name}
                    />
                    <div className="img_name">
                      <p className="mb-2">{img.name}</p>
                      <FeatherIcon
                        icon="external-link"
                        onClick={() => handleSubmit(img)}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
            {modal && (
              <ProjectModal
                handleSetModal={setModal}
                projectData={projectInfo}
              />
            )}
          </div>
        </div>
      </div>
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
      className="fixed right-0 left-0 z-110 w-full md:inset-0 h-full flex items-center justify-center bg-[#000000e9]">
      <div className="relative w-full max-w-2xl max-h-full mx-auto">
        {projectData && (
          <div className="relative bg-white">
            <div className="flex items-center justify-between">
              <img src={projectData.image} alt={projectData.name} />
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <h5 className="mb-2 text-secondary">{projectData.name}</h5>

              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {projectData.description}
              </p>
            </div>

            <div className="flex items-center bg-primary text-white">
              <Link
                to={projectData.link}
                target="_blank"
                className="w-[100%] flex items-center justify-center font-[500]">
                Details
              </Link>
              <button
                type="button"
                className="w-[100%] flex items-center justify-center"
                onClick={handleStateReset}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

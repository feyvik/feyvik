/** @format */
/** @format */
import styled from "styled-components";
import img from "../../assets/home/me3.jpg";

const AboutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px 0px;

  h1 {
    font-size: 50px;
  }

  .about_content {
    min-height: 60vh;
    width: 100%;

    fieldset {
      position: relative;
      display: flex;
      align-items: center;
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
        inset: 0;
        background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
        pointer-events: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`;

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

const AboutMe = ({ aboutRef }: SectionsProps) => {
  return (
    <AboutWrapper ref={aboutRef}>
      <div className="container">
        <div className="about_content">
          <div className="mb-6">
            <fieldset>
              <figcaption className="text-primary mb-8">
                <h2 className="font-heading">About Me.</h2>
              </figcaption>
              <div className="mb-8 image-container">
                <img
                  src={img}
                  alt="image description"
                  className="rounded-full"
                />
              </div>
            </fieldset>
            <h2 className="text-secondary dark:text-white">
              Let me introduce myself.
            </h2>
          </div>
          <div className="text-left">
            <p className="mb-4">
              Hi, I’m Favour Vivian Woka; a frontend developer with over 4 years
              of experience building clean, responsive, and user-friendly web
              applications using tools like Angular and React.
            </p>
            <p className="mb-4">
              I love turning ideas into beautiful digital experiences that are
              easy to use and accessible to everyone. Over the years, I’ve
              worked with startups and teams to bring products to life; focusing
              on design, performance, and making sure the user always comes
              first.
            </p>
            <p className="mb-4">
              I’m also the founder of FLE Tribe Ltd, the company behind
              <a
                href="https://www.thefletribe.com.ng/home"
                className="text-blue-600 mx-1"
                target="_blank">
                The FLE Tribe
              </a>
              a beginner-friendly tech community that helps people get started
              in tech without feeling lost or alone. We focus on learning,
              encouragement, and growth, because I know how important support is
              when you’re just starting out.
            </p>
            <p className="mb-4">
              Right now, I’m deepening my skills on the path to becoming a
              Frontend Engineer, while staying passionate about learning,
              sharing, and helping others find their place in tech.
            </p>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutMe;

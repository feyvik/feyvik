/** @format */

import styled from "styled-components";
import img from "../../assets/KELV2726.jpg";
import { Link } from "react-router";
import { ArrowRight } from "feather-icons-react";

const AboutWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px 0px;

  .about_content {
    min-height: 60vh;
    width: 100%;

    fieldset {
      position: relative;
      display: flex;
      align-items: center;
      figcaption {
        position: absolute;
        left: 50px;
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
        background: rgba(0, 0, 0, 0.2); /* Black overlay with 50% opacity */
        pointer-events: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
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
              <figcaption className="text-[#3D5AFE] mb-8">
                <h2 className="font-heading">About Me.</h2>
              </figcaption>
              <div className="mb-8 shadow-2xl image-container rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/20">
                <img
                  src={img}
                  alt="image description"
                  className="rounded-full"
                />
              </div>
            </fieldset>
            <h2 className="text-[#3D5AFE] dark:text-white">
              Building Interfaces With Intention.
            </h2>
          </div>
          <div className="text-left">
            <p className="mb-4">
              I believe great products are built on craft, not just code. For
              over 8 years, I've worked with teams, founders, and communities to
              build responsive web applications, design scalable systems, and
              bring ideas to life across frontend engineering, AI-assisted
              development, and brand design.
            </p>
            <p className="mb-4">
              My mission is simple: create pathways for beginners to thrive in
              tech. I'm committed to continuous learning, and to building
              skills, projects, and communities that are accessible, practical,
              and genuinely built to last
            </p>
            <p className="mb-4">
              <Link to={"/about"} className="text-[#2D1B69]">
                Read my full story <ArrowRight className="inline-block ml-1" />
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
              <h3 className="font-bold mb-2 text-[#3D5AFE] ">8+</h3>
              <p className="dark:text-dark">
                8+ years of experience in Frontend Engineering
              </p>
            </div>
            <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
              <h3 className="font-bold mb-2 text-[#3D5AFE] ">1+</h3>
              <p className="dark:text-dark">
                1+ years of experience in Brand Design
              </p>
            </div>
            <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
              <h3 className="font-bold mb-2 text-[#3D5AFE]">100+</h3>
              <p className="dark:text-dark">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutMe;

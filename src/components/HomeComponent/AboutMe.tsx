/** @format */

import styled from "styled-components";
import img from "../../assets/KELV2726.jpg";
import { Link } from "react-router";
import { ArrowRight } from "feather-icons-react";

const AboutWrapper = styled.div`
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
`;

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

const AboutMe = ({ aboutRef }: SectionsProps) => {
  return (
    <AboutWrapper ref={aboutRef} className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-6">
          <div className="avatar-frame shadow-2xl rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/10">
            <img src={img} alt="image description" className="rounded-full" />
          </div>
          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase">
            About Me.
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl mb-4 leading-tight">
          Building Interfaces With Intention.
        </h2>
        <div className="text-left text-gray-500">
          <p className="mb-4">
            I believe great products are built on craft, not just code. For over
            8 years, I've worked with teams, founders, and communities to build
            responsive web applications, design scalable systems, and bring
            ideas to life across frontend engineering, AI-assisted development,
            and brand design.
          </p>
          <p className="mb-4">
            My mission is simple: create pathways for beginners to thrive in
            tech. I'm committed to continuous learning, and to building skills,
            projects, and communities that are accessible, practical, and
            genuinely built to last
          </p>
          <p className="mb-4">
            <Link to={"/about"} className="text-[#3D5AFE]">
              Read my full story <ArrowRight className="inline-block ml-1" />
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-500">
          <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
            <h3 className="font-bold mb-2 text-[#3D5AFE] ">8+</h3>
            <p className="dark:text-white">
              8+ years of experience in Frontend Engineering
            </p>
          </div>
          <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
            <h3 className="font-bold mb-2 text-[#3D5AFE] ">1+</h3>
            <p className="dark:text-white">
              1+ years of experience in Brand Design
            </p>
          </div>
          <div className="rounded-lg dark:text-white text-center border border-[#2D1B69]/20 p-4">
            <h3 className="font-bold mb-2 text-[#3D5AFE]">100+</h3>
            <p className="dark:text-white">Lives Impacted</p>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutMe;

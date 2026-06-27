/** @format */

import styled from "styled-components";
import img from "../../assets/KELV2726.jpg";
import { Link } from "react-router";
import { ArrowRight } from "feather-icons-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const AboutWrapper = styled.div`
  background: linear-gradient(
    135deg,
    rgba(45, 27, 105, 0.04) 0%,
    rgba(39, 151, 250, 0.03) 100%
  );

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

  .stat-card {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(45, 27, 105, 0.12);
    }
  }
`;

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

const AboutMe = ({ aboutRef }: SectionsProps) => {
  const animRef = useScrollAnimation();

  return (
    <AboutWrapper ref={aboutRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={animRef}
          className="animate-on-scroll">
          <div className="flex items-center gap-5 mb-6">
            <div className="avatar-frame shadow-2xl rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/10">
              <img src={img} alt="Favour Vivian" className="rounded-full" />
            </div>
            <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase">
              About Me.
            </p>
          </div>

          <h2 className="mb-5 leading-tight dark:text-white">
            Building Interfaces With Intention.
          </h2>

          <div className="text-left text-gray-600 dark:text-gray-300 max-w-2xl">
            <p className="mb-4 leading-relaxed">
              I believe great products are built on craft, not just code. For
              over 8 years, I've worked with teams, founders, and communities to
              build responsive web applications, design scalable systems, and
              bring ideas to life across frontend engineering, AI-assisted
              development, and brand design.
            </p>
            <p className="mb-4 leading-relaxed">
              My mission is simple: create pathways for beginners to thrive in
              tech. I'm committed to continuous learning, and to building
              skills, projects, and communities that are accessible, practical,
              and genuinely built to last.
            </p>
            <p className="mb-6">
              <Link
                to={"/about"}
                className="inline-flex items-center gap-1 text-[#3D5AFE] font-semibold hover:underline">
                Read my full story <ArrowRight size={16} />
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="stat-card stagger-child rounded-xl dark:text-white text-center border border-[#2D1B69]/15 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm">
              <h3 className="font-bold mb-2 text-[#3D5AFE]">8+</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Years of experience in Frontend Engineering
              </p>
            </div>
            <div className="stat-card stagger-child rounded-xl dark:text-white text-center border border-[#2D1B69]/15 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm">
              <h3 className="font-bold mb-2 text-[#3D5AFE]">1+</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Years of experience in Brand Design
              </p>
            </div>
            <div className="stat-card stagger-child rounded-xl dark:text-white text-center border border-[#2D1B69]/15 bg-white dark:bg-[#1a1a2e] p-6 shadow-sm">
              <h3 className="font-bold mb-2 text-[#3D5AFE]">100+</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Lives Impacted
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutMe;

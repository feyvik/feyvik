/** @format */

import styled from "styled-components";
import { Mail } from "feather-icons-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

type SectionsProps = {
  contactRef: React.RefObject<HTMLDivElement | null>;
};

const ContactWrapper = styled.div`
  background: "linear-gradient(135deg, rgba(45,27,105,0.06) 0%, rgba(61,90,254,0.06) 50%, rgba(39,151,250,0.05) 100%)";
`;

export default function ContactSection({ contactRef }: SectionsProps) {
  const animRef = useScrollAnimation();

  return (
    <ContactWrapper ref={contactRef} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={animRef} className="animate-on-scroll">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] mb-4 uppercase">
              Get In Touch
            </p>
            <h2 className="mb-4 leading-tight dark:text-light">
              Let's create impact together
            </h2>
            <div className="w-12 h-1 rounded-full bg-[#3D5AFE] mx-auto" />
          </div>

          <div>
            <p className="text-xl leading-relaxed mb-10">
              Whether you're looking for a brand designer, frontend developer,
              or collaborator — I'd love to hear from you.
            </p>

            <a
              href="mailto:vivianemma97@gmail.com"
              className="block sm:inline-flex items-center gap-5 group space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#3D5AFE] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-[#2D1B69] transition-colors duration-300">
                <Mail size={24} className="text-light" />
              </div>
              <span className="text-xl font-medium text-gray-800 dark:text-white group-hover:text-[#3D5AFE] transition-colors duration-200">
                vivianemma97@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

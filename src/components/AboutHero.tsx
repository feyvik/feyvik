/** @format */

import img from "../assets/KELV2726.jpg";

export default function AboutHero() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
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

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-[#2D1B69] border-4 border-[#2D1B69]/20 shadow-xl flex-shrink-0">
            <img
              src={img}
              alt="Favour Vivian"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 dark:text-light">
              Favour Vivian
            </h1>
            <p className="text-lg md:text-xl dark leading-relaxed max-w-2xl">
              Frontend engineer with a growing foundation in brand design,
              building products that work and carry real visual identity.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-lg leading-relaxed">
            I've spent 8+ years in the trenches of frontend development —
            Angular, React, TypeScript — shipping real products for real
            companies. But somewhere along the way, I found myself drawn to a
            different kind of craft: not how an interface functions, but how a
            brand looks and feels — its mark, its color story, its visual
            language. That pull is what's now taking me into brand and logo
            design.
          </p>
          <p className="text-[#3D5AFE] text-lg mt-4">
            Where I've built things:
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At HouseAfrica, I spent over three years as Lead Frontend Engineer,
            owning the build and refactor of responsive applications and working
            hand-in-hand with designers to make sure what shipped actually
            matched the vision — not just a rough approximation of it. At
            Phreetech, I picked up the API-integration and performance side of
            things, turning Figma files into layouts that hold up across devices
            and aren't just "responsive" on paper.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Teaching has been part of the journey too. As a React Tutor and Team
            Lead at KodeCamp, I didn't just assign projects — I dug into where
            individual students were stuck and built one-on-one sessions to get
            them unstuck. That instinct — translate the complicated thing into
            something a person can actually use — followed me into founding FLE
            Tribe, a community for beginners who need more structure than a
            YouTube tutorial gives them.
          </p>
          <p className="text-[#3D5AFE] text-lg mt-4">Where I am now:</p>
          <p className="text-lg leading-relaxed mt-4">
            Lately, most of my serious technical work involves AI-assisted
            development — using Claude not as a shortcut, but as a real
            collaborator in architecture and implementation.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            And now I'm doing something a little different by the side: learning
            about brand and logo design — typography, color systems, marks,
            visual identity — because I think the products and brands that stand
            out aren't just built well, they're designed well. I want to be
            someone who understands both sides: the system that makes something
            work, and the identity that makes it memorable.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My mission is simple: create pathways for beginners to thrive in
            tech. I'm committed to continuous learning, and to building skills,
            projects, and communities that are accessible, practical, and
            genuinely built to last
          </p>
        </div>
      </div>
    </div>
  );
}

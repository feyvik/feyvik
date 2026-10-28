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
              className="w-full h-full object-cover object-top"
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
            I've spent the past few years building for the web as a frontend
            developer, turning designs and ideas into functional, user-friendly
            digital experiences. Along the way, I've developed an interest in
            something beyond writing code: understanding how design shapes the
            way people experience a product, and how visual identity makes a
            brand memorable.
          </p>
          <p className="text-lg leading-relaxed">
            That curiosity is what led me to explore brand and logo design.
          </p>
          <p className="text-[#3D5AFE] text-lg mt-4">Where I've Been:</p>
          <p className="text-lg leading-relaxed mt-4">
            My journey has been about more than building interfaces. It's also
            been about collaboration, problem-solving, and helping people
            understand technology.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            As a frontend developer, I've worked on turning designs into
            responsive applications, integrating APIs, improving performance,
            and ensuring that what gets built reflects the intended experience.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Teaching has also become an important part of my journey. Through
            mentoring and working with beginners, I've learned that
            understanding something deeply means being able to break it down and
            help someone else understand it, too.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            That same belief shapes my interest in building communities and
            creating pathways for people who are just starting their tech
            journey.
          </p>
          <p className="text-[#3D5AFE] text-lg mt-4">Where I am now:</p>
          <p className="text-lg leading-relaxed mt-4">
            I'm continuing to deepen my knowledge of frontend engineering while
            exploring brand and visual identity design. I'm interested in the
            relationship between how a product works and how it communicates its
            identity to the world.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I'm also exploring AI-assisted development as another way to
            approach problem-solving, improve workflows, and build more
            effectively.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            For me, learning doesn't stop at mastering a tool or a framework.
            It's about understanding the principles behind the work and becoming
            better at applying them.
          </p>
          <p className="text-[#3D5AFE] text-lg mt-4">What Drives Me:</p>
          <p className="text-lg leading-relaxed mt-4">
            I'm passionate about making technology more accessible to the next
            generation of African developers. Through teaching, sharing what I
            learn, and building communities, I want to help beginners find
            direction, develop practical skills, and discover opportunities in
            tech.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I'm here to keep learning, keep building, and help others grow along
            the way.
          </p>
        </div>
      </div>
    </div>
  );
}

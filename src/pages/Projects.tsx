/** @format */

import HomeProject from "../components/HomeProject";

const Projects = () => {
  return (
    <div>
      <div
        className="pt-32 pb-16 px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,27,105,0.06) 0%, rgba(61,90,254,0.05) 60%, rgba(39,151,250,0.04) 100%)",
        }}>
        <div className="max-w-6xl mx-auto">
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

          <p className="text-sm font-semibold tracking-widest text-[#3D5AFE] uppercase mb-4">
            Engineering Work
          </p>
          <h1 className="dark:text-light mb-4">
            Development
            <span className="text-[#3D5AFE]"> Portfolio</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed">
            From scalable web applications to AI-assisted builds — projects that
            solve real problems with clean, maintainable code.
          </p>
        </div>
      </div>
      <HomeProject />
    </div>
  );
};

export default Projects;

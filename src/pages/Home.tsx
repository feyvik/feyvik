/** @format */
import AboutMe from "../components/HomeComponent/AboutMe";
import Hero from "../components/HomeComponent/Hero";
import HomeProject from "../components/HomeComponent/HomeProject";

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const Home = ({ aboutRef, projectRef }: SectionsProps) => {
  return (
    <div className="px-6">
      <Hero />
      <AboutMe aboutRef={aboutRef} />
      <HomeProject projectRef={projectRef} />
    </div>
  );
};

export default Home;

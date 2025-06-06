/** @format */
import AboutMe from "../components/HomeComponent/AboutMe";
import Hero from "../components/HomeComponent/Hero";
import HomeGallery from "../components/HomeComponent/HomeGallery";
import HomeProject from "../components/HomeComponent/HomeProject";

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const Home = ({ aboutRef, projectRef }: SectionsProps) => {
  return (
    <div>
      <Hero />
      <AboutMe aboutRef={aboutRef} />
      <HomeProject projectRef={projectRef} />
      <HomeGallery />
    </div>
  );
};

export default Home;

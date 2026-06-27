/** @format */
import AboutMe from "../components/HomeComponent/AboutMe";
import ContactSection from "../components/HomeComponent/ContactSection";
import Hero from "../components/HomeComponent/Hero";
import HomeProject from "../components/HomeProject";
import ImageCarousel from "../components/ImageCarousel";

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const Home = ({ aboutRef, projectRef }: SectionsProps) => {
  return (
    <div>
      <Hero />
      <AboutMe aboutRef={aboutRef} />
      <ImageCarousel />
      <HomeProject projectRef={projectRef} projectNumber={3} />
      <ContactSection />
    </div>
  );
};

export default Home;

/** @format */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutMe from "../components/HomeComponent/AboutMe";
import ContactSection from "../components/HomeComponent/ContactSection";
import Hero from "../components/HomeComponent/Hero";
import HomeProject from "../components/HomeProject";
import ImageCarousel from "../components/ImageCarousel";
import DesignGallery from "../components/DesignGallery/DesignGallery";

type SectionsProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
};

const Home = ({ aboutRef, projectRef }: SectionsProps) => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    // Small delay lets the page finish rendering before scrolling
    const timer = setTimeout(() => {
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        about: aboutRef,
        projects: projectRef,
      };
      refMap[scrollTo]?.current?.scrollIntoView({ behavior: "smooth" });

      if (scrollTo === "contact") {
        document
          .querySelector("[data-contact]")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.state, aboutRef, projectRef]);

  return (
    <div>
      <Hero />
      <AboutMe aboutRef={aboutRef} />
      <HomeProject projectRef={projectRef} projectNumber={3} />
      <ImageCarousel />
      <DesignGallery projectNumber={3} />
      <ContactSection />
    </div>
  );
};

export default Home;

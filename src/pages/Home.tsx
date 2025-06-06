/** @format */
import AboutMe from "../components/HomeComponent/AboutMe";
import Hero from "../components/HomeComponent/Hero";
import HomeGallery from "../components/HomeComponent/HomeGallery";
import HomeProject from "../components/HomeComponent/HomeProject";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <HomeProject />
      <HomeGallery />
    </div>
  );
};

export default Home;

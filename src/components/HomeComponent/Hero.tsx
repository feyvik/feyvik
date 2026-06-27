/** @format */
import styled from "styled-components";
import img from "../../assets/KELV2738.jpg";

const HeroWrapper = styled.div`
  button:hover {
    background: #3d5afe;
    color: #ffffff;
    border: none;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <fieldset>
            <h1 className="mb-3 dark:text-white text-5xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              Developing and Designing{" "}
              <br className="hidden sm:block lg:hidden" />
              <b className="text-[#3D5AFE]"> With Clarity. </b>
            </h1>
            <p className="text-gray-500 text-md max-w-lg leading-relaxed dark:text-white text-foreground">
              A frontend engineer and design-minded builder with 8+ years of
              experience architecting scalable, AI-assisted web applications,
              bridging engineering and design, and leading communities that make
              tech accessible to beginners across Africa.
            </p>

            <div className="flex gap-4 hero_btn items-center mt-6">
              <button className="bg-[#2D1B69] text-white dark:text-white">
                Learn More
              </button>
              <button className="text-gray-500 border border-[#2D1B69] dark:text-white">
                Work With Me
              </button>
            </div>
          </fieldset>
        </div>
        <div className="order-1 md:order-2 flex justify-center image-container">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/20 flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src={img}
              alt="image description"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

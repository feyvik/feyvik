/** @format */
import styled from "styled-components";
import img from "../../assets/KELV2738.jpg";

const HeroWrapper = styled.div`
  position: relative;
  background:
    radial-gradient(
      ellipse 80% 60% at 70% 50%,
      rgba(45, 27, 105, 0.07) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 50% 80% at 10% 20%,
      rgba(39, 151, 250, 0.05) 0%,
      transparent 60%
    );

  button.btn-primary {
    background: #2d1b69;
    color: #ffffff;
    &:hover {
      background: #3d5afe;
      box-shadow: 0 6px 20px rgba(61, 90, 254, 0.35);
    }
  }

  button.btn-outline {
    border: 2px solid #2d1b69;
    background: transparent;
    &:hover {
      background: #2d1b69;
      color: #ffffff;
      box-shadow: 0 6px 20px rgba(45, 27, 105, 0.25);
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <fieldset>
            <h1 className="hero-enter hero-enter-delay-1 mb-4 dark:text-white text-foreground">
              Developing and Designing{" "}
              <br className="hidden sm:block lg:hidden" />
              <span className="text-[#3D5AFE]">With Clarity.</span>
            </h1>
            <p className="hero-enter hero-enter-delay-2 text-gray-600 text-lg max-w-lg leading-relaxed dark:text-gray-300">
              A frontend engineer and design-minded builder with 8+ years of
              experience architecting scalable, AI-assisted web applications,
              bridging engineering and design, and leading communities that make
              tech accessible to beginners across Africa.
            </p>

            <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-4 items-center mt-8">
              <button className="btn-primary">Learn More</button>
              <button className="btn-outline text-[#2d1b69] dark:text-white">
                Work With Me
              </button>
            </div>
          </fieldset>
        </div>

        <div className="order-1 md:order-2 flex justify-center hero-image-enter">
          <div className="relative">
            {/* decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#3D5AFE]/20 scale-110" />
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#2D1B69] border-4 border-[#2D1B69]/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Favour Vivian"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

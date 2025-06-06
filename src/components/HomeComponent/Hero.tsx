/** @format */
import styled from "styled-components";
import img from "../../assets/homeImage/me1.jpg";

const HeroWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  .hero_content {
    min-height: 100vh;
    width: 100%;

    h1 {
      font-size: 46px;
    }

    .image-container {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 50%;

      img {
        object-fit: cover;
        vertical-align: bottom;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        object-position: top;
      }
    }

    .image-container::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
      pointer-events: none;
    }

    .hero_info {
      width: 50%;
    }

    @media (max-width: 1123px) {
      .image-container {
        width: 100%;
        left: 0;
      }

      .hero_info {
        position: relative;
        z-index: 2;
        color: #ffffff;
        text-align: center;
        width: 100%;

        .hero_btn {
          display: flex;
          flex-direction: column;
        }

        button {
          width: 400px;
        }

        .text-text-light {
          color: #ffffff;
        }
      }
    }

    @media (max-width: 450px) {
      h1 {
        font-size: 30px;
      }
      .hero_info {
        button {
          width: 100%;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper className="bg-[#ebebeb] dark:bg-dark">
      <div className="container">
        <div className="grid grid-cols gap-4 items-center hero_content">
          <div className="image-container">
            <img src={img} alt="image description" />
          </div>
          <div className="hero_info px-[1.5rem] pt-[60px]">
            <fieldset>
              <figcaption className="text-primary text-2xl">Hello</figcaption>
              <h1 className="font-heading mb-3 text-secondary dark:text-white">
                Welcome to My <br className="hidden sm:block" /> Developer
                Journey
              </h1>
              <span>
                I'm a passionate developer dedicated to creating innovative
                <br className="hidden sm:block" />
                solutions. Join me as I share my growth and milestones in the
                tech world.
              </span>

              <div className="grid lg:grid-cols-2 gap-4 hero_btn items-center mt-10">
                <button className="bg-primary text-white lg:w-[100%] dark:text-white">
                  More About Me
                </button>
                <button className="border border-primary lg:w-[100%] text-secondary dark:text-white">
                  Get In Touch
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

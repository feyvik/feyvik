/** @format */
/** @format */
import styled from "styled-components";
import img from "../../assets/homeImage/me3.jpg";

const GalleryWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 40px 0px;

  h1 {
    font-size: 50px;
  }

  .gallery_content {
    min-height: 60vh;
    width: 100%;

    fieldset {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;

      figcaption {
        position: absolute;
        left: 40px;
        z-index: 3;
        h2 {
          font-size: 40px;
        }
      }

      .image-container {
        width: 200px;
        height: 200px;
      }
      img {
        object-fit: cover;
        vertical-align: bottom;
        margin: 0;
        padding: 0;
        object-position: top;
        height: 100%;
        width: 100%;
      }

      .image-container::after {
        content: "";
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
        pointer-events: none;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        left: 0;
      }
    }
  }

  h6 {
    font-weight: 400;
  }

  img {
    object-fit: cover;
    vertical-align: bottom;
    margin: 0;
    padding: 0;
    object-position: top;
    height: 100%;
    width: 100%;
  }
`;

const HomeGallery = () => {
  return (
    <GalleryWrapper>
      <div className="container">
        <div className="gallery_content">
          <div className="mb-6">
            <fieldset>
              <figcaption className="text-primary mb-8">
                <h2 className="font-heading">Growth Milestones.</h2>
              </figcaption>
              <div className="mb-8 image-container">
                <img
                  src={img}
                  alt="image description"
                  className="rounded-full"
                />
              </div>
            </fieldset>
          </div>
          <div className="text-left">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GalleryWrapper>
  );
};

export default HomeGallery;

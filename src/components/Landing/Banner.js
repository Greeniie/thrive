import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../assets/8.jpg";
import image2 from "../assets/EXHIBITION.jpg";
import image3 from "../assets/4.jpg";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div>
      <Navbar />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ filter: "brightness(30%)" }}
          />
          <Carousel.Caption>
            <div className="t-textbig1">
              Inspire, Create, Start and Scale Your Business{" "}
            </div>
            <div className="t-textsmall1">
              Are you a business owner seeking for a way to network, learn, and
              find a safe haven online for development?
            </div>
            <div>
              <button className="button bg-[#eca44c] rounded-sm py-3 px-5">
                Learn More
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            style={{ filter: "brightness(30%)" }}
          />

          <Carousel.Caption>
            <div className="t-textbig1">
              Get your company a virtual address.
            </div>
            <div className="t-textsmall1">
              If you're an entrepreneur who does not have connections to other
              entrepreneurs who share your interests, starting a business can be
              difficult and lonely.
            </div>
            <div>
              <button className="button bg-[#eca44c] rounded-sm py-3 px-5">
                Learn More
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            style={{ filter: "brightness(30%)" }}
          />

          <Carousel.Caption>
            <div className="t-textbig1">
              Support enterpreneurs to grow and thrive
            </div>
            <div className="t-textsmall1">
              You can support enterprenuers by subsidizing our services.
            </div>
            <div>
              <button className="button bg-[#eca44c] rounded-sm py-3 px-5">
                Learn More
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

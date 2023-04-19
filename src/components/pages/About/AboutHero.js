import React from "react";

const AboutHero = () => {
  return (
    <div className="pb-[50px]">
      <div className="min-h-[50vh] about">
        <div className="w-4/5 mx-auto pt-10">
          <div className="about-t-textbig text-center">About Us</div>
        </div>
      </div>
      <div>
        <div className="bannerabout">
          <div>
            <p className="about-bannertext">
              Who we <span style={{ color: "#eca44c" }}> are</span>
            </p>
          </div>

          <p className="readmoresmall">
            Thrive is a one-stop digital support center for growing businesses
            in Nigeria.
          </p>
          <p className="readmoresmall">
            We support micro, small and medium businesses with the resources
            they need to grow and thrive in a challenging environment.
          </p>
          
        </div>
      </div>
          
    </div>
  );
};

export default AboutHero;

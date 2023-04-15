import React from "react";
import grouppic from "../../assets/30.jpg";
import vision from "../../assets/7.jpg";
import solution from "../../assets/solution.png";
import decentralized from "../../assets/decentralized.png";
import help from "../../assets/help.png";
import reduce from "../../assets/reduce-cost.png";

const AboutBanner = () => {
  return (
    <div style={{ fontFamily: "DM Sans" }}>
      <div style={{ bgColor: "#f9f9f9" }}>
        <div className="banner2">
          <div>
            <div className="images">
              <img src={grouppic} alt="" className="missionimg" />
            </div>
          </div>
          <div className="bannerabout">
            <div>
              <p className="bannertext">
                Our
                <span style={{ color: "#ff0000" }}> Mission </span>
              </p>
            </div>

            <p className="bannertextsmall">
              Working with our partners and sponsors, to build and operate a
              viable one-stop digital platform of support services for micro,
              small and medium enterprises.
            </p>
          </div>
        </div>
      </div>
      <div style={{ bgColor: "#f9f9f9" }}>
        <div className="banner">
          <div className="bannerabout">
            <div>
              <p className="bannertext">
                Our
                <span style={{ color: "#ff0000" }}> Vision </span>
              </p>
            </div>

            <p className="bannertextsmall">
              Expand the economic contribution of growing businesses by
              providing best-in-class sustainable, scalable entrepreneurship
              support solutions on a digital platform.
            </p>
          </div>
          <div>
            <div className="images">
              <img src={vision} alt="" className="missionimg" />
            </div>
          </div>
        </div>
      </div>

      <section className="text-center flex flex-col items-center mt-[100px] mb-20 w-[90%] mx-auto">
        <h2 className="text-[50px] mb-5 text-[#ff0000] hero">Our Objectives</h2>
        <div className="block md:grid md:overflow-hidden md:grid-cols-4 md:grid-rows-1 gap-2">
          <div className="relative flex h-[316px] p-3 justify-center border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
            <div style={{ fontFamily: "DM Sans" }}>
              <div
                className="text-gray-100 absolute top-20"
                style={{
                  fontFamily: "DM Sans",
                  zIndex: "-1",
                  fontSize: "80px",
                }}
              >
                01
              </div>
              <img
                className="mb-3 mt-3 w-[30%] m-auto h-auto"
                src={solution}
                alt="solution"
              />
              Provide solutions for post-training entrepreneurship development
              support, beginning with the GIZ-GOPA ICSS beneficiaries.
            </div>
          </div>
          <div className="relative flex h-[316px] p-3 justify-center border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
            <div style={{ fontFamily: "DM Sans" }}>
              <div
                className="text-gray-100 absolute top-20"
                style={{
                  fontFamily: "DM Sans",
                  zIndex: "-1",
                  fontSize: "80px",
                }}
              >
                02
              </div>
              <img
                className="mb-3 mt-3 w-[30%] m-auto h-auto"
                src={decentralized}
                alt="solution"
              />
              Offer a plug-and-play framework for corporate and development
              partners to fulfill their desire to contribute to entrepreneurship
              development, without the need to create their programs.
            </div>
          </div>
          <div className="relative flex h-[316px] p-3 justify-center border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
            <div style={{ fontFamily: "DM Sans" }}>
              <div
                className="text-gray-100 absolute top-20"
                style={{
                  fontFamily: "DM Sans",
                  zIndex: "-1",
                  fontSize: "80px",
                }}
              >
                03
              </div>
              <img
                className="mb-3 mt-3 w-[30%] m-auto h-auto"
                src={reduce}
                alt="solution"
              />
              Minimize the cost of access and use of the support services
              through augmented collaboration.
            </div>
          </div>
          <div className="relative flex h-[316px] p-3 justify-center border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
            <div style={{ fontFamily: "DM Sans" }}>
              <div
                className="text-gray-100 absolute top-20"
                style={{
                  fontFamily: "DM Sans",
                  zIndex: "-1",
                  fontSize: "80px",
                }}
              >
                04
              </div>
              <img
                className="mb-3 mt-3 w-[30%] m-auto h-auto"
                src={help}
                alt="solution"
              />
              Minimize the socioeconomic vulnerability of dislocated
              entrepreneurs such as IDPs, migrants, and returnees with programs
              targeting their most recurrent needs.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBanner;

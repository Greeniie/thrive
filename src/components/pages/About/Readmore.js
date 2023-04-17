import React from "react";

const Readmore = () => {
  return (
    <div style={{ bgColor: "#f9f9f9" }}>
      <div>
        {/* <div>
          <div className="images">
            <img src={grouppic} alt="" className="missionimg" />
          </div>
        </div> */}
        <div className="bannerabout">
          <div>
            <p className="bannertext">
              Still <span style={{ color: "#eca44c" }}> Curious?</span>
            </p>
          </div>

          <p className="readmoresmall">
            Micros. Small and Medium Enterprises (MSMEs) are the backbone of
            many economies around the world. They offer employment, contribute
            to the economy, and bring about lots of innovation. However, these
            businesses often face many problems. For instance, they lack access
            to funding, marketing, and technological resources.
          </p>
          <p className="readmoresmall">
            Many organizations try to help small businesses by training their
            owners. But often, even after the training the small and growing
            businesses still need support and help to pay for business tools and
            opportunities that are easily available to bigger ones.{" "}
          </p>
          <p className="readmoresmall">
            THRIVE digital support center is closing the gap by providing many
            business support solutions together on one platform. And it makes it
            affordable for growing businesses by allowing bigger organizations
            to help pay for the services by offering subsidies as Co-Sponsors of
            THRIVE.{" "}
          </p>
          <p className="readmoresmall">
            By subscribing to these resources, growing businesses can thrive in
            today's tough business environment.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Readmore;

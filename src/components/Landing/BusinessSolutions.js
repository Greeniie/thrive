import React from "react";
import DA from "../assets/29.jpg";
import VO from "../assets/30.jpg";
import BT from "../assets/6.jpg";
import ATE from "../assets/17.jpg";
import WB from "../assets/14.jpg";
import BML from "../assets/23.jpg";
import DL from "../assets/9.jpg";
import NAM from "../assets/18.jpg";
import CT from "../assets/21.jpg";
import ATF from "../assets/22.jpg";
import icss from "../assets/10.jpg";
import el from "../assets/28.jpg";
import mh from "../assets/33.jpg";

const BusinessSolutions = () => {
  return (
    <div>
      {" "}
      <section className="pb-10 mt-[100px] max-w-[90%] mx-auto">
        <div className="block md:grid md:overflow-hidden md:grid-cols-3 md:grid-rows-2 gap-3">
          <div className="flex items-end w-full object-cover h-[100px] md:h-[400px] object-center row-span-1 col-span-1">
            <div className="hero text-[28px] our-works-text text-[#ff0000] mt-auto pl-8 pb-16">
              <span className="pb-3 pr-1 border-t-0 border-l-0 border-r-0 border-b-2 border-[#ff0000]">
                Business
              </span>
              Solutions
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={DA}
              alt=""
            />
            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Digital Address
            </h3>

            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                THRIVE provides a mini website extension e.g.
                (thrivebiz.ng/murphyscouture) that is searchable web address.
                The user will have the option to upgrade to a standalone website
                and still maintain a presence on the platform.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={VO}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Virtual Office{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                The virtual business address will be offered at Enterprise
                Hubs,16a Trinity Avenue Victoria Island Lagos, along with
                Visitor/mail reception, Call Answering service, etc. After
                verification, THRIVE users will be allowed to use the address on
                their website and stationeries for easy reach by their
                customers.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={WB}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Workspace Booking{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                This service affords MSMEs to book workspaces through a linked
                application.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={BT}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Business Template{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                This service affords MSMEs to book workspaces through a linked
                application.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={ATE}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Access To Events{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Signing up on the portal provides MSMEs with various avenues to
                gain access to business events, including industry associations,
                government organizations, online events, business incubators,
                and accelerators and more.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={BML}
              alt=""
            />
            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Business Media Library{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Entrepreneurs need continuous learning. This service offers them
                access to high-quality, up-to-date resources such as business
                journals, training materials, webinars, marketing strategies,
                financial planning, management skills, and more.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={DL}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Directory Listing{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Thrive Business listing is an important tool that helps MSMEs to
                be searchable online and reach a larger audience. Users can
                quickly find their contact information, address, business hours,
                and other relevant details, making it easier for the customer to
                engage with the business owners.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={NAM}
              alt=""
            />
            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Networking & Marketplace{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Thrive Business listing is an important tool that helps MSMEs to
                be searchable online and reach a larger audience. Users can
                quickly find their contact information, address, business hours,
                and other relevant details, making it easier for the customer to
                engage with the business owners.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={CT}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Collaboration Tools{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Collaboration tools such as Zoom, help small businesses meet,
                collaborate and network fast and widely. But they are often
                expensive. THRIVE brings such tools within reach.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={ATF}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Access to Finance{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">
                Access to finance is crucial for the growth and sustainability
                of MSMEs, THRIVE will provide users with information and tools
                to access useful financial products offered by different
                financial houses.
              </p>
            </div>
          </div>
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={mh}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Mental Health
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">Mental Health</p>
            </div>
          </div>{" "}
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={icss}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              ICSS Partner's Portal{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">ICSS partner's portal</p>
            </div>
          </div>{" "}
          <div className="content" style={{ position: "relative" }}>
            <div className="content-overlay"></div>
            <img
              className="content-image mb-2 md:mb-0 brightness-50 w-full object-cover h-[400px] object-center row-span-1 col-span-1 hover:-translate-y-1 ease-in duration-200"
              src={el}
              alt=""
            />

            <h3
              className="content-title"
              style={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              e-Learning{" "}
            </h3>
            <div className="content-details fadeIn-bottom">
              <p className="content-text">e-Learning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutions;

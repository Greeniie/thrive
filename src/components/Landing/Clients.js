import React from "react";
import enter from "../assets/enterprise.jpg";
import value from "../assets/valuecon.png";
import woh from "../assets/woh.jpeg";
import hope from "../assets/hope.png";
import viis from "../assets/viis.png";
import lapo from "../assets/lapo.jpg";
import sabi from "../assets/sabi.png";
import dofoll from "../assets/dofoll.png";
import seyp from "../assets/seyp.png";
import kairos from "../assets/kairos.jpg";

const Clients = () => {
  return (
    <div>
      {" "}
      <section className="text-center flex flex-col items-center mt-[100px] mb-20 w-[90%] mx-auto">
        <h2 className="text-[50px] mb-5 text-[#eca44c] hero text-center">
          Project Partner{" "}
        </h2>
        <a
          href="http://www.enterprisehubs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              className="min-w-full object-contain h-[350px] p-5 row-span-1 col-span-1"
              src={enter}
              alt="icon"
            />
          </div>
        </a>
      </section>
      <section className="text-center flex flex-col items-center mt-[100px] mb-20 w-[90%] mx-auto">
        <h2 className="text-[50px] mb-5 text-[#eca44c] hero">
          Meet Our Consortium Members
        </h2>
        <div className="block md:grid md:overflow-hidden md:grid-cols-4 md:grid-rows-1 gap-2 md:items-center">
          <a
            href="https://valuecon.com.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={value}
                alt="icon"
              />
            </div>
          </a>
          <a
            href="https://webofheartsfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={woh}
                alt="icon"
              />
            </div>
          </a>
          <a
            href="https://hopebuildersconsult.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={hope}
                alt="icon"
              />
            </div>
          </a>
          <a
            href="https://viisaus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={viis}
                alt="icon"
              />
            </div>
          </a>{" "}
          <a
            href="https://lapoinstitute.edu.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={lapo}
                alt="icon"
              />
            </div>
          </a>{" "}
          <a
            href="https://sabihub.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={sabi}
                alt="icon"
              />
            </div>
          </a>{" "}
          <a
            href="https://dofoll.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={dofoll}
                alt="icon"
              />
            </div>
          </a>{" "}
          <a
            href="https://seypng.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
                src={seyp}
                alt="icon"
              />
            </div>
          </a>
          <div>
            <img
              className="min-w-full object-contain h-auto p-5 row-span-1 col-span-1"
              src={kairos}
              alt="icon"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

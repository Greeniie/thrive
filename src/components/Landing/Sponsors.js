import React from "react";
import giz from "../assets/giz-logo.gif";
import gopa from "../assets/gopa.png";


const Sponsors = () => {
  return (
    <div>
      {" "}
      <section className="text-center flex flex-col items-center mb-20 mt-[100px] w-[90%] mx-auto">
        <h2 className="text-[50px] mb-5 text-[#ff0000] hero">Our Sponsors</h2>

        <div className="block md:grid md:overflow-hidden md:grid-cols-2 md:grid-rows-1 gap-2">
          <div className="h-[100%] row-span-1 col-span-1">
            <a href="http://giz.de" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
                <img
                  className="min-w-full object-cover object-center p-10 py-[134px]"
                  src={giz}
                  alt="icon"
                />
              </div>
            </a>
          </div>

          <div className="h-auto  row-span-1 col-span-1">
            <a href="https://gopa.de" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
                <img
                  className="min-w-full object-cover p-10"
                  src={gopa}
                  alt="icon"
                />
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Sponsors;

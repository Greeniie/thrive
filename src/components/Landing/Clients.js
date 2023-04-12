import React from "react";
import enter from "../assets/enterprise.jpeg";
import value from "../assets/valuecon.jpeg";
import woh from "../assets/woh.jpeg";
import hope from "../assets/hope.png";

const Clients = () => {
  return (
    <div>
      {" "}
      <section className="text-center flex flex-col items-center mt-[100px] mb-20 w-[90%] mx-auto">
        <h2 className="text-[50px] mb-5 text-[#ff0000] hero">
          Meet Our Clients
        </h2>

        <div className="block md:grid md:overflow-hidden md:grid-cols-4 md:grid-rows-1 gap-2">
          <a href="http://www.enterprisehubs.com/" target="_blank">
            <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
              <img
                className="min-w-full object-cover h-auto p-20 row-span-1 col-span-1"
                src={enter}
                alt="icon"
              />
            </div>
          </a>

          <a href="https://valuecon.com.ng" target="_blank">
            <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
              <img
                className="min-w-full object-cover h-auto p-20 row-span-1 col-span-1"
                src={value}
                alt="icon"
              />
            </div>
          </a>

          <a href="https://webofheartsfoundation.org" target="_blank">
            <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
              <img
                className="min-w-full object-cover h-auto p-20 row-span-1 col-span-1"
                src={woh}
                alt="icon"
              />
            </div>
          </a>
          <a href="https://hopebuildersconsult.org" target="_blank">
            <div className="flex items-center justify-center md:border border-x border-t-0 hover:border-b-[#ff0000] hover:border-b-[4px] hover:shadow-lg">
              <img
                className="w-full object-cover object-center h-[316px] py-[120px] row-span-1 col-span-1"
                src={hope}
                alt="icon"
              />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Clients;

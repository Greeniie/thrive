import React from "react";

const ClientBanner = () => {
  return (
    <div style={{ fontFamily: "DM Sans" }} className="min-h-[85vh] hero-bg">
      <div className="w-4/5 mx-auto pt-10">
        <div className="t-textbig">
          Heading stays here
        </div>
        <div className="t-textsmall w-full md:w-5/6 text-white leading-snug">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut provident
          expedita sed facere quo error adipisci praesentium, ullam odit autem
          commodi rem enim iste doloribus maxime ratione! Cumque, consectetur!
          Ea?
        </div>
        <div className="flex flex-col md:flex-row gap-2 pb-2 md:pb-0">
          <button className="button bg-black text-white rounded-sm py-3 px-5">
            Press me
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default ClientBanner;

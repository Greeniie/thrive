import React from "react";

const CTA2 = () => {
  return (
    <div className="min-h-[85vh] hero-bg2 mt-10">
      <div className="w-4/5 mx-auto pt-10 md:pt-28">
        <div className="t-textbig">One-time sign-up.</div>
        <div className="t-textbig"> Easy sign-ins.</div>


        <div className="t-textsmall w-full md:w-1/2 text-white leading-snug">
          Your own searchable mini website, virtual office, marketplace for your
          business, thousands of ready-to-use templates, and more. A world of
          business tools. All yours for a small monthly subscription - a tiny
          fraction of the actual cost. Thanks to support from our Co-Sponsors
          led by GIZ/GOPA.
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <button className="bg-[#ff0000] text-white rounded-sm py-3 px-5">
            Become a Sponsor
          </button>
          <button className="bg-white text-black rounded-sm py-3 px-5 mb-3 md:mb-0">
            I am a Business Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA2;

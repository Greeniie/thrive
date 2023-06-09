import React from "react";

const CTA = () => {
  return (
    <div style={{fontFamily: 'DM Sans'}} className="min-h-[85vh] hero-bg">
      <div className="w-4/5 mx-auto pt-10">
        <div className="t-textbig">
          One Stop Digital Support For Entrepreneurs
        </div>
        <div className="t-textsmall w-full md:w-5/6 text-white leading-snug">
          Welcome to ICSS THRIVE. This is a one-stop digital support platform
          for entrepreneurs and their businesses in Nigeria. Through a
          collective of sponsor organisations and project partners, we provide
          vital after-care support to entrepreneurs.
        </div>
        <div className="flex flex-col md:flex-row gap-2 pb-2 md:pb-0">
          <button className="button bg-[#eca44c] rounded-sm py-3 px-5">
            Become a Sponsor
          </button>
          <button className="button bg-[#eca44c] rounded-sm py-3 px-5">
            I am a Business Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

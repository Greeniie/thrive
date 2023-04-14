import React from "react";
import Footer from "../../Landing/Footer";
import NavBar2 from "../../Landing/Navbar2";
import SponsorsList from "../../Landing/Sponsors";
import BecomeAPartner from "./BecomeAPartner";
const Sponsors = () => {
  return (
    <div>
      <NavBar2 />
      <div className="min-h-[85vh] therapist">
        <div className="w-4/5 mx-auto pt-10">
          <div className="t-textbig">Meet Our Sponsors</div>
          <div className="t-textsmall w-full md:w-1/2 text-white leading-snug">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            possimus accusamus sit? Pariatur corporis ad ipsa quo natus
            asperiores voluptate est atque debitis fugiat iste harum minus, illo
            officiis perspiciatis?
          </div>
          <div className="flex flex-col md:flex-row gap-2 pb-2 md:pb-0">
            <button className="bg-[#ff0000] hover:bg-black text-white rounded-sm py-3 px-5">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <SponsorsList />
      </div>
      <BecomeAPartner />
      <Footer />
    </div>
  );
};

export default Sponsors;

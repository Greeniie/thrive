import React from "react";
import Footer from "../../Landing/Footer";
import NavBar2 from "../../Landing/Navbar2";
import SponsorsList from "../../Landing/Sponsors";
import BecomeAPartner from "./BecomeAPartner";
import { HashLink } from "react-router-hash-link";
const Sponsors = () => {
 
  return (
    <div>
      <NavBar2 />
      <div className="min-h-[85vh] therapist">
        <div className="w-4/5 mx-auto pt-10">
          <div className="t-textbig">Meet Our Sponsors</div>
          <div className="t-textsmall w-full md:w-5/6 text-white leading-snug">
            We offer various sponsorship levels and benefits, including access
            to a new and bigger target market, logo placement, event
            participation, etc. Your sponsorship will help us provide MSMEs with
            the tools and resources they need to succeed, including access to
            finance, business development services, and market opportunities.
          </div>
          <div className="flex flex-col md:flex-row gap-2 pb-2 md:pb-0">
            <HashLink smooth to="#become"
              className="bg-[#eca44c] hover:bg-black text-white rounded-sm py-3 px-5 no-underline"
            >
              Become a Sponsor
            </HashLink>
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

import React from "react";
import Banner from "./Banner";
import BusinessSolutions from "./BusinessSolutions";
import Clients from "./Clients";
import CTA from "./CTA";
import Footer from "./Footer";
import Sponsors from "./Sponsors";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <BusinessSolutions />
      <CTA />
      <Sponsors/>
      <Clients />
      <Footer/>
    </div>
  );
};

export default LandingPage;

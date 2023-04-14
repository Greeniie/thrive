import React from "react";
import Footer from "../../Landing/Footer";
import NavBar2 from "../../Landing/Navbar2";
import AboutBanner from "./AboutBanner";
import CTA2 from "./CTA2";
import Readmore from "./Readmore";

const About = () => {
  return (
    <>
      <NavBar2 />
      <AboutBanner/>
      <CTA2/>
      <Readmore/>
      <Footer/>
    </>
  );
};

export default About;

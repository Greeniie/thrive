import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import DirectoryListing from "./components/pages/DirectoryListing/DirectoryListing";
import Marketplace from "./components/pages/MarketPlace/Marketplace";
import Sponsors from "./components/pages/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="directory-listing" element={<DirectoryListing />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientWebsite from "./components/ClientWebsite/ClientWebsite";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Onboarding/Login";
import Signup from "./components/Onboarding/Signup";
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
        <Route path="client/:name" element={<ClientWebsite />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />



      </Routes>
    </>
  );
}

export default App;

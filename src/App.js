import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ClientWebsite from "./components/ClientWebsite/ClientWebsite";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Onboarding/Login";
import Signup from "./components/Onboarding/Signup";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import DirectoryListing from "./components/pages/DirectoryListing/DirectoryListing";
import Marketplace from "./components/pages/MarketPlace/Marketplace";
import Sponsors from "./components/pages/Sponsors/Sponsors";
import Dashboard from "./components/GizAdmin/Dashboard";
import Maindashboard from "./components/GizAdmin/pages/Maindashboard";
import Beneficiaries from "./components/GizAdmin/pages/Beneficiaries";
import GizLogin from "./components/GizAdmin/GizLogin";

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
        <Route path="giz-login" element={<GizLogin />} />
        <Route path="signup" element={<Signup />} />
        <Route
            path="/admin-dashboard"
            element={<Navigate to="/admin-dashboard/home" />}
          />

          <Route path="/admin-dashboard" element={<Dashboard />}>
            <Route path="home" element={<Maindashboard />} />

            <Route
              path="beneficiaries"
              element={<Beneficiaries />}
            />
            
          </Route>


      </Routes>
    </>
  );
}

export default App;

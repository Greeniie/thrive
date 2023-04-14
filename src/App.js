import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import About from "./components/pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

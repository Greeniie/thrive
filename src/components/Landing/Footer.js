import React from "react";
import Logo from "../assets/LOGO_WHITE.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => {
  var today = new Date();
  var date = today.getFullYear();

  return (
    <div>
      <div style={{ background: "black" }}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ minHeight: "374px" }}>
            <div className="footerstuff">
              <div className="logo">
                <img src={Logo} className="navlogo" alt="" />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton
                    href="#"
                    target="_blank"
                  >
                    <InstagramIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                  >
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                  >
                    <LinkedInIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="#"
                    target="_blank"
                  >
                    <TwitterIcon style={{ color: "#fff" }} />
                  </IconButton>
                </div>
              </div>
              <div className="footerlinks">
                <ul className="first">
                  <li>
                    <Link className="footerlink" to="/life-hack">
                      About
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="footerlink" to="/life-hack">
                      Services
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="footerlink"
                      to="/privacy-policy"
                      target="_blank"
                    >
                      Sponsors
                    </Link>
                  </li>
                  <li> <Link
                      className="footerlink"
                      to="/privacy-policy"
                      target="_blank"
                    >
                      Market Place
                    </Link></li>
                </ul>

                <ul className="third">
                  <li>
                    <Link to="/contact-a-therapist" className="footerlink">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/emergency-contact" className="footerlink">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/lanes" className="footerlink">
                      T&Cs
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="joinus">
                <div class="w-full p-3">
                  <h3 class="text-2xl text-white">Subscribe</h3>
                  <div class="flex w-full mb-5">
                    <input
                      type="search"
                      placeholder="Your Email"
                      class="w-[400px] h-12 px-3 border border-white"
                    />
                    <button class="h-12 px-2 text-white bg-black border border-white">
                      <i
                        class="fa fa-envelope text-white"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>

        <div className="footerfinal">
          <div>&copy;{date} Thrive. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

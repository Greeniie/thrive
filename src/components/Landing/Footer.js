import React from "react";
import Logo from "../assets/LOGO_WHITE.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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
                    href="https://www.instagram.com/irespondafrica/"
                    target="_blank"
                  >
                    <InstagramIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="https://www.facebook.com/irespondafrica"
                    target="_blank"
                  >
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="https://www.linkedin.com/company/irespond-africa/about"
                    target="_blank"
                  >
                    <LinkedInIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton
                    href="https://twitter.com/iRespondAfrica"
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
                      Blog
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="footerlink" to="/life-hack">
                      Careers
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="footerlink"
                      to="/privacy-policy"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>iRespond TV</li>
                </ul>

                <ul className="third">
                  <li>
                    <Link to="/contact-a-therapist" className="footerlink">
                      Talk to a therapist
                    </Link>
                  </li>
                  <li>
                    <Link to="/emergency-contact" className="footerlink">
                      Request emergency
                    </Link>
                  </li>
                  <li>
                    <Link to="/lanes" className="footerlink">
                      Find a support group
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
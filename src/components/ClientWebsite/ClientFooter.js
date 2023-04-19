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
import { HashLink } from "react-router-hash-link";
import { Business } from "@mui/icons-material";

const ClientFooter = ({ business }) => {
  var today = new Date();
  var date = today.getFullYear();

  return (
    <div>
      <div style={{ background: "black", fontFamily: "DM Sans" }}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ minHeight: "374px" }}>
            <div className="footerstuff">
              <div className="logo">
                <img src={Logo} className="navlogo" alt="" />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IconButton href="#" target="_blank">
                    <InstagramIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton href="#" target="_blank">
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton href="#" target="_blank">
                    <LinkedInIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton href="#" target="_blank">
                    <TwitterIcon style={{ color: "#fff" }} />
                  </IconButton>
                </div>
                <div className="footerlink">{business.business_address}</div>
              </div>
              <div className="footerlinks">
                <ul className="first">
                  <li>
                    <HashLink className="footerlink" smooth to="#about">
                      About
                    </HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink className="footerlink" smooth to="#services">
                      Services
                    </HashLink>
                  </li>
                  <li>
                    {" "}
                    <HashLink className="footerlink" smooth to="#contact">
                      Contact
                    </HashLink>
                  </li>
                  <li></li>
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
          <div>&copy;{date} {business?.business_name}. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default ClientFooter;

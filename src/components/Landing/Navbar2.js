import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../components/assets/LOGOMARK.png";
import HamburgerOpenIcon from "../MenuIcons/HamburgerOpenIcon";
import HamburgerCloseIcon from "../MenuIcons/HamburgerCloseIcon";

const NavBar2 = () => {
  const lgstyle = {
    height: "63px",
  };

  const lgstylemobile = {
    height: "43px",
    marginLeft: "12px",
  };

  const signin1 = {
    textTransform: "capitalize",
    fontFamily: "DM Sans",
    fontWeight: "bold",
    border: "none",
    marginLeft: "20px",
  };

  const signupmobile = {
    textTransform: "capitalize",
    fontFamily: "DM Sans",
    fontWeight: "bold",
    border: "none",
    marginTop: "8px",
    width: "100%",
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let activeStyle = {
    fontWeight: "bold",
    color: "#ff0000",
  };

  return (
    <div className="landingnav">
      <div className="mynav">
        <AppBar
          position="static"
          sx={{
            bgcolor: "#FEFFFF",
            color: "#6B7280",
            fontSize: "14px",
            lineHeight: "20px",
            padding: '10px'

          }}
          elevation={0}
          className="nav"
        >
          <Toolbar disableGutters className="toolbar">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to="/"
                className="logo"
                style={{
                  margin: "0 9px",
                }}
              >
                <img src={logo} alt="" style={lgstylemobile} />
              </Link>
            </Typography>

            <Box
              style={{ justifyContent: "flex-end" }}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="main-menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {anchorElNav ? <HamburgerCloseIcon /> : <HamburgerOpenIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block" },
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <NavLink
                      to="/about"
                      className="landingnavlink1"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      About Us
                    </NavLink>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <NavLink to="/sponsors" className="landingnavlink1">
                      Our Sponsors
                    </NavLink>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <Link to="marketplace" className="landingnavlink1">
                      Marketplace
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <NavLink
                      to="/contact"
                      className="landingnavlink1"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Contact{" "}
                    </NavLink>
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                    }}
                  >
                    <Link to="/login" className="landingnavlink1">
                      Sign In
                    </Link>
                  </Typography>

                  <Typography>
                    <Button
                      href="/contact-a-therapist"
                      sx={{
                        color: "white",
                        backgroundColor: "#ff0000",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "#ff0000",
                        },
                      }}
                      style={signupmobile}
                    >
                      Sign up
                    </Button>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link to="/" className="logo">
                <img src={logo} alt="" style={lgstyle} />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              <Typography>
                <NavLink
                  to="/about"
                  className="landingnavlink1"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  About Us
                </NavLink>
              </Typography>
              <Typography>
                <Link to="/sponsors" className="landingnavlink1">
                  Our Sponsors
                </Link>
              </Typography>
              <Typography>
                <Link to="marketplace" className="landingnavlink1">
                  Marketplace
                </Link>
              </Typography>
              <Typography>
                <NavLink
                  to="/contact"
                  className="landingnavlink1"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact
                </NavLink>
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              <div>
                <Typography>
                  <Link to="/login" className="signin1">
                    Sign In
                  </Link>
                </Typography>
              </div>

              <Typography>
                <Button
                  href="/contact-a-therapist"
                  sx={{
                    color: "white",
                    backgroundColor: "#ff0000",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#ff0000",
                    },
                  }}
                  style={signin1}
                >
                  Sign up
                </Button>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default NavBar2;

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

const Navbar = () => {
  const lgstyle = {
    height: "63px",
  };

  const lgstylemobile = {
    height: "43px",
    marginLeft: "12px",
  };

  const signin = {
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
    width: '100%'
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
    color: "#2b7833",
  };


  return (
    <div className="landingnav">
      <div className="mynav">
        <AppBar
          sx={{
            position: 'absolute',
            background: 'transparent',
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
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to="/home"
                className="logo"
            
              >
                <img src={logo} alt="" style={lgstyle} />
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
                    <NavLink to="/about" className="landingnavlink"  style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                      About Us
                    </NavLink>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <NavLink to="/assessment" className="landingnavlink">
                      Our Sponsors
                    </NavLink>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <Link to="/Marketplace" className="landingnavlink"  >
                      Marketplace
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      my: 2,
                    }}
                  >
                    <NavLink
                      to="/findhelp"
                      className="landingnavlink"
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
                      <Link to="/login" className="signin">
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
              <Link to="/home" className="logo">
                <img src={logo} alt="" style={lgstylemobile} />
              </Link>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
               <Typography>
                <NavLink to="/about" className="landingnavlink"  style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                  About Us
                </NavLink>
              </Typography>
              <Typography>
                <Link to="/assessment" className="landingnavlink">
                  Our Sponsors
                </Link>
              </Typography>
              <Typography>
                <Link to="/Marketplace" className="landingnavlink">
                  Marketplace
                </Link>
              </Typography>
              <Typography>
                <NavLink
                  to="/findhelp"
                  className="landingnavlink"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact
                </NavLink>
              </Typography>

              
            </Box>
            <Box  sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}>
               <div>
                  <Typography>
                    <Link to="/login" className="signin">
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
                  style={signin}
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

export default Navbar;

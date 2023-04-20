import React from "react";
import logo from "../../components/assets/LOGO_BLACK.png";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
// import GoogleIcon from "@mui/icons-material/Google";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import useAuth from "./hooks/useAuth";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#eca44c",
    },
  },
});

const loginUrl = "v1/login";

const GizLogin = () => {
  const [loading, setLoading] = useState(false);

  //   const { setAuth } = useAuth();

  //   const { setLoggedIn } = useAuth();

  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/community";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState({
    password: "",
    showPassword: false,
  });
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  let userOrEmail = user || email;

  useEffect(() => {
    setErrMsg("");
  }, [userOrEmail, pwd]);

  const handleChange = (prop) => (event) => {
    setPwd({ ...pwd, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPwd({
      ...pwd,
      showPassword: !pwd.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let tempPass;
  let tempUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoggedIn(false);
    setLoading(true);

    navigate('/admin-dashboard')

    // try {
    //   const res = await axios.post(
    //     loginUrl,
    //     JSON.stringify({
    //       usernameOrEmail: user.toLowerCase() || email,
    //       password: pwd.password,
    //     }),
    //     {
    //       headers: { "Content-Type": "application/json " },
    //     }
    //   );

    //   console.log(res?.data);

    //   const currentUser = res?.data?.user;

    //   const accessToken = res?.data?.accessToken;
    //   const roles = res?.data?.roles;

    //   tempPass = pwd.password;
    //   tempUser = user || email;

    //    setAuth({ usernameOrEmail: tempUser, pwd: tempPass, roles, accessToken });
    //   localStorage.setItem("accessToken", accessToken);
    //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
    //   setUser("");
    //   setPwd("");
    //   setLoading(false);
    //    setLoggedIn(true);
    //   navigate(from, { replace: true });
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //     setLoading(false);
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Username or Password incorrect");
    //     setLoading(false);
    //   } else if (err.response?.status === 403) {
    //     setErrMsg("Unauthorized");
    //     setLoading(false);
    //   } else {
    //     setErrMsg("Login Failed");
    //     setLoading(false);
    //   }
    //   errRef.current.focus();
    // }
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div style={{ background: "#000" }}>
      <div className="giz-onboard-wrap w-[90%] md:w-[60%]">
        <div className="login">
          <div className="flex justify-center">
            <img src={logo} alt="" className="dashboard-logo" />
          </div>
          <div className="loginheader pb-3 text-center">
            <div>Giz Admin Sign in</div>
          </div>

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <Box style={{ fontFamily: "DM Sans" }}>
                <TextField
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    borderRadius: "6px",
                  }}
                  id="username "
                  label="Username or Email"
                  variant="outlined"
                  value={email}
                  onChange={handleUser}
                  ref={userRef}
                />
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="password"
                    type={pwd.showPassword ? "text" : "password"}
                    value={pwd.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {pwd.showPassword ? (
                            <VisibilityOff style={{ color: "#eca44c" }} />
                          ) : (
                            <Visibility style={{ color: "#eca44c" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Box>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ paddingTop: "8px" }}>
                <Link
                  style={{
                    color: "#eca44c",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                  }}
                  to="/forgot-password
             "
                >
                  Forgot Password
                </Link>
              </div>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <ThemeProvider theme={theme}>
                <LoadingButton
                  loading={loading}
                  color="secondary"
                  size="large"
                  style={{
                    fontFamily: "DM sans",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    textTransform: "capitalize",
                    textAlign: "justify",
                    letterSpacing: "0.02em",
                    width: "100%",
                  }}
                  variant="contained"
                  type="submit"
                  disabled={!pwd.password || !user ? true : false}
                >
                  Log in
                </LoadingButton>
              </ThemeProvider>
            </div>
          </form>

          <div className="already">
            <p
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "150%",
                color: "#718096",
                paddingBottom: "18px",
                letterSpacing: "0.02em",
              }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#eca44c",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  paddingLeft: "8px",
                }}
              >
                <span>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GizLogin;

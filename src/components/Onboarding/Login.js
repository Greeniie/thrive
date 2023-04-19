import React from "react";
import onboardimg from "../../components/assets/7.jpg";
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
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useState, useEffect, useRef } from "react";
// import useAuth from "./hooks/useAuth";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#eca44c",
    },
  },
});

const loginUrl = "v1/login";

const Login = () => {
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

    try {
      const res = await axios.post(
        loginUrl,
        JSON.stringify({
          usernameOrEmail: user.toLowerCase() || email,
          password: pwd.password,
        }),
        {
          headers: { "Content-Type": "application/json " },
        }
      );

      console.log(res?.data);

      const currentUser = res?.data?.user;

      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;

      tempPass = pwd.password;
      tempUser = user || email;

    //   setAuth({ usernameOrEmail: tempUser, pwd: tempPass, roles, accessToken });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setUser("");
      setPwd("");
      setLoading(false);
    //   setLoggedIn(true);
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
        setLoading(false);
      } else if (err.response?.status === 400) {
        setErrMsg("Username or Password incorrect");
        setLoading(false);
      } else if (err.response?.status === 403) {
        setErrMsg("Unauthorized");
        setLoading(false);
      } else {
        setErrMsg("Login Failed");
        setLoading(false);
      }
      errRef.current.focus();
    }
  };

//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "278502535175-e02d2c24ce2iucisgp0onemh4nnhshbe.apps.googleusercontent.com",
//         scope: "email",
//       });
//     }

//     gapi.load("client:auth2", start);
//   }, []);

//   const handleLogin = (googleResponse) => {
//     console.log(googleResponse);
//   };

//   const handleFailure = (result) => {
//     console.log(result);
//   };

  const customStyle = {
    fontFamily: "DM sans",
    padding: "8px 22px",
    color: "white",
    background: "#eca44c",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    textTransform: "capitalize",
    textAlign: "justify",
    letterSpacing: "0.02em",
    width: "100%",
  };

  const handleUser = (e) => {
    setUser(e.target.value);
    setEmail(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="onboard-wrap">
        <div>
          <img
            style={{ height: "780px", width: "auto" }}
            src={onboardimg}
            alt="onboarding"
          />
        </div>
        <div className="login">
          <div className="loginheader" style={{ display: "flex", gap: "15px" }}>
            <div>
              <IconButton
                onClick={goBack}
                style={{ color: "#eca44c", marginRight: "16px" }}
                aria-label="GoBack"
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div>Sign in</div>
          </div>
          {/* <div>
            <GoogleLogin
              render={(renderProps) => (
                <Button onClick={renderProps.onClick} style={customStyle}>
                  <GoogleIcon style={{ marginRight: "10px" }} />
                  Log in with Google
                </Button>
              )}
              clientId="278502535175-e02d2c24ce2iucisgp0onemh4nnhshbe.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          </div> */}
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <Box>
                <TextField
                  color="success"
                  style={{
                    width: "100%",
                    paddingBottom: "15px",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    borderRadius: "6px",
                  }}
                  id="username "
                  label="Username or Email"
                  variant="outlined"
                  value={user || email}
                  onChange={handleUser}
                  ref={userRef}
                />
                <FormControl variant="outlined" style={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="outlined-adornment-password"
                    color="success"
                  >
                    Password
                  </InputLabel>
                  <OutlinedInput
                    color="success"
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

export default Login;

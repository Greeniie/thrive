import React from "react";
import onboardimg from "../../components/assets/7.jpg";
import LoadingButton from "@mui/lab/LoadingButton";

import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuccessPage from "./SuccessPage";
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

const FIRSTNAME_REGEX = /^[A-z][A-z0-9-_]{1,23}$/;
const LASTNAME_REGEX = /^[A-z][A-z0-9-_]{1,23}$/;
const EMAIL_REGEX = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

const Signup = () => {
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const [loading, setLoading] = useState(false);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  useEffect(() => {
    lastNameRef.current.focus();
  }, []);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(FIRSTNAME_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(LASTNAME_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "v1/user",
        JSON.stringify({
          email: email,
          firstname: firstName,
          lastname: lastName,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setSuccess(true);
      setFirstName("");
      setLastName("");
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No server response");
        setLoading(false);
      } else if (err.response?.status === 400) {
        setErrMsg("User already exists");
        setLoading(false);
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
        setLoading(false);
      } else {
        setErrMsg("Registration failed");
        setLoading(false);
      }
      errRef.current.focus();
    }
  };

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId:
  //         "278502535175-e02d2c24ce2iucisgp0onemh4nnhshbe.apps.googleusercontent.com",
  //       scope: "email",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

  // const handleLogin = (googleResponse) => {
  //   console.log(googleResponse);
  // };

  // const handleFailure = (result) => {
  //   console.log(result);
  // };

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

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {success ? (
        <section>
          <SuccessPage />
        </section>
      ) : (
        <div>
          <div className="onboard-wrap">
            <div>
              <img
                src={onboardimg}
                alt="signup"
                style={{ height: "780px", width: "auto" }}
              />
            </div>
            <div className="login">
              <div
                className="loginheader"
                style={{ display: "flex", gap: "15px" }}
              >
                <div>
                  <IconButton
                    onClick={goBack}
                    style={{ color: "#eca44c", marginRight: "16px" }}
                    aria-label="GoBack"
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </div>
                <div className="pb-3">Create Account</div>
              </div>

              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="namefields">
                  <div className="fname">
                    <TextField
                      sx={{
                        width: "100%",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                        borderRadius: "6px",
                      }}
                      label="First Name"
                      variant="outlined"
                      id="firstname"
                      ref={firstNameRef}
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      aria-invalid={validFirstName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setFirstNameFocus(true)}
                      onBlur={() => setFirstNameFocus(false)}
                    />
                    <div style={{ display: "flex" }}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validFirstName ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validFirstName || !firstName ? "hide" : "invalid"
                        }
                      />
                      <p
                        id="uidnote"
                        className={
                          firstNameFocus && firstName && !validFirstName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        2 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                      </p>
                    </div>
                  </div>

                  <div>
                    <TextField                  style={{
                        width: "100%",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                        borderRadius: "6px",
                      }}
                      label="Last Name"
                      variant="outlined"
                      id="lastname"
                      ref={lastNameRef}
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      aria-invalid={validLastName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setLastNameFocus(true)}
                      onBlur={() => setLastNameFocus(false)}
                    />

                    <div style={{ display: "flex" }}>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validLastName ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={
                          validLastName || !lastName ? "hide" : "invalid"
                        }
                      />
                      <p
                        id="uidnote"
                        className={
                          lastNameFocus && lastName && !validLastName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        2 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{
                        marginTop: '15px'
                      }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker sx={{  width: "100%",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                        borderRadius: "6px",}}/>
                  </LocalizationProvider>
                </div>
                <div>
                  <TextField
                    style={{
                      width: "100%",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                      marginTop: "15px",
                      borderRadius: "6px",
                    }}
                    label="Email"
                    variant="outlined"
                    id="email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />

                  <div style={{ display: "flex" }}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                    <p
                      id="uidnote"
                      className={
                        emailFocus && email && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      Please enter a valid email
                      <br />
                    </p>
                  </div>
                </div>

                <div>
                  <TextField
                    style={{
                      width: "100%",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                      marginTop: "15px",
                      borderRadius: "6px",
                    }}
                    label="Phone number"
                    variant="outlined"
                    id="number"
                  />
                </div>

                <div style={{ paddingTop: "40px" }}>
                  <ThemeProvider theme={theme}>
                    <LoadingButton
                      loading={loading}
                      color="secondary"
                      type="submit"
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
                      disabled={
                        !validFirstName || !validLastName ? true : false
                      }
                    >
                      Create Account
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
                  Already have an account?{" "}
                  <Link
                    to="/login"
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
                    <span>Log in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;

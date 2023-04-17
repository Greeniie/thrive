import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import LayersIcon from "@mui/icons-material/Layers";
import axios from "axios";
import NavBar2 from "../../Landing/Navbar2";
import Businesses from "./Businesses";

const DirectoryListing = () => {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinesses = async () => {
    try {
      const res = await axios.get("http://208.73.206.2:8080/api/businesses");
      setBusinesses(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, [businesses?.length]);

  const [query, setQuery] = useState("");

  const businessByName = businesses?.filter((business) => {
    if (query === "") {
      return business;
    } else if (
      business.business_name.toLowerCase().includes(query.toLowerCase())
    ) {
      return business;
    }
  });

  return (
    <div>
      <NavBar2 />
      <div className="d-wrap">
        <div className="laneheaderstyle">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <div
              className="text-2xl text-[#eca44c]"
              style={{ fontFamily: "DM Sans" }}
            >
              Businesses
            </div>{" "}
            <LayersIcon style={{ color: "#eca44c", marginLeft: "20px" }} />
            <div style={{ color: "#eca44c", fontFamily: "Poppins" }}>
              {businesses?.length}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              color="success"
              sx={{
                width: "305px",

                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    paddingRight: "0",
                    borderRadius: "23px",
                    border: "none",
                  },
                },

                "& .MuiInputBase-root": {
                  fontFamily: "Poppins",
                  fontSize: "14px",
                },
              }}
              size="small"
              className="search"
              id="outlined-basic"
              placeholder="Search businesses by name"
              onChange={(e) => setQuery(e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon style={{ color: "#eca44c" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div
          style={{
            paddingBottom: "20px",
          }}
        >
          {businesses?.length === 0 ? (
            <div>No businesses available</div>
          ) : (
            <Businesses businesses={businessByName} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectoryListing;

import React from "react";
import logo from "../assets/LOGO_BLACK.png";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  let activeStyle = {
    color: '#eca44c',
    fontWeight: '700',
    fontSize: '20px'

  };

  return (
    <div className="sidebar">
      <div style={{ width: "85%", margin: "auto" }}>
        <div>
          <img src={logo} alt="" className="dashboard-logo" />
        </div>

        <NavLink
          className="dashboard-link"
          to="/admin-dashboard/home"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div>
            <DashboardIcon style={{ marginRight: "10px" }} /> Dashboard
          </div>
        </NavLink>
        <NavLink
          className="dashboard-link"
          to="/admin-dashboard/beneficiaries"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div>
            {" "}
            <ManageAccountsIcon style={{ marginRight: "10px" }} /> Beneficiaries
          </div>
        </NavLink>
        <NavLink
          className="dashboard-link"
          to="/giz-login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <div>
            {" "}
            <LogoutIcon style={{ marginRight: "10px" }} /> Log out
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

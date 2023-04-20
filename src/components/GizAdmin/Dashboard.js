import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import MainHeader from "./MainHeader";

const Dashboard = () => {
  return (
    <div className="dashboard-wrap">
      <div>
        {" "}
        <Sidebar />
      </div>

      <div>
        {" "}
        <div className="mainwrap">
        <div style={{marginBottom: '50px'}}> <MainHeader /></div> 
          <Outlet />

        </div>
    
      </div>
    </div>
  );
};

export default Dashboard;

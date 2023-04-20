import { React, useState, useEffect } from "react";
import dash from '../../assets/dashboard-home.png'


const Maindashboard = () => {
  return (
    <div style={{fontFamily: 'DM Sans'}} className="block md:flex md: justify-between mt-5 bg-white min-h-[100px] p-10 rounded">
      <div>
      <div className="text-black text-3xl pb-5 w-[90%] font-bold">Hey! Welcome to the Dashboard</div>
      <div className="text-black text-md pb-3 w-[70%]">
        Your one stop shop to SME business solutions, proudly, supported by
        GOPA-GIZ.
      </div>
      <button
        className="button bg-[#eca44c] rounded-sm py-2 px-3"
      >
        Get started
      </button>{" "}
      </div>

      <div><img src={dash} alt="dashboard img" /></div>
      
    </div>
  );
};

export default Maindashboard;

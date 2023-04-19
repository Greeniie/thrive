import React from "react";

const ClientAbout = ({business}) => {
  return (
      <div id="about" className="bannerabout">
        <div>
          <p className="clientbannertext">
            About this <span style={{ color: "#eca44c" }}> Company</span>
          </p>
        </div>

        <p className="readmoresmall">
        {business.business_description}
        </p>
      </div>
  );
};

export default ClientAbout;

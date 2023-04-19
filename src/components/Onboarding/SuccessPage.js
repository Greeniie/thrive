import React from "react";

const SuccessPage = () => {
  return (
    <>
      <div className="success-body">
        <div className="circle-container">
          <div className="circle-border"></div>
          <div className="circle">
            <div className="success"></div>
          </div>
        </div>
      </div>
      <div className="success-text">
        <div>Success!</div>
        <div>Please check your email address to verify your account</div>
      </div>
    </>
  );
};

export default SuccessPage;

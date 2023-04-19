import React from "react";

const ClientContact = () => {
  return (
    <div >
      <div>
        <div className="clientbannertext" id="contact">
          Contact <span style={{ color: "#eca44c" }}> Us</span>
        </div>
      </div>
      <div className="pt-10 w-[90%] md:w-[50%] mx-auto">
        <div>
          <div>
            <div>
              <label className="pb-1" htmlfor="lname">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                class="w-full h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
            <div>
              <label className="pb-1" htmlfor="lname">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                class="w-full h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
            <div>
              <label className="pb-1" htmlfor="lname">
                Message
              </label>
              <textarea
                placeholder="Enter country"
                class="w-full mb-5 px-3 border border-gray-200 h-[300px]"
              />
            </div>
            <button className="button bg-[#eca44c] rounded-sm py-3 px-5 mb-3 md:mb-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientContact;

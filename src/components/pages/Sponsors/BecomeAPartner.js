import React from "react";
import image from "../../assets/26.jpg";

const BecomeAPartner = () => {
  return (
    <div className="pt-10 mx-3 md:mx-0" id="become">
      <h2 className="text-[50px] mb-5 text-[#eca44c] text-center">
        Become a Sponsor
      </h2>

      <div className="formwrap">
        <div>
          <div className="block md:flex items-center gap-2">
            <div>
              <label className="pb-1" htmlfor="fname">First Name</label>
              <input
                type="text"
                placeholder="Enter Firstname"
                class="w-full md:w-[312px] h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
            <div>
              <label className="pb-1" htmlfor="lname">Last Name</label>

              <input
                type="text"
                placeholder="Enter Lastname"
                class="w-full md:w-[312px] h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
          </div>

          <div className="block md:flex items-center w-full gap-2">

            <div>
            <label className="pb-1" htmlfor="email">Email</label>

              <input
                type="text"
                placeholder="Your Email"
                class="w-full md:w-[312px] h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
            <div>
              <label className="pb-1" htmlfor="number">Phone Number</label>

              <input
                type="text"
                placeholder="Your Phone Number"
                class="w-full md:w-[312px] h-12 mb-5 px-3 border border-gray-200"
              />
            </div>
          </div>
          <div>
            <label className="pb-1" htmlfor="lname">Organization/Company</label>
            <input
              type="text"
              placeholder="Organization/Company"
              class="w-full h-12 mb-5 px-3 border border-gray-200"
            />
          </div>
          <div>
            <label className="pb-1" htmlfor="lname">Country</label>
            <input
              type="text"
              placeholder="Country"
              class="w-full h-12 mb-5 px-3 border border-gray-200"
            />
          </div>
          <button className="button bg-[#eca44c] rounded-sm py-3 px-5 mb-3 md:mb-0">
            Submit
          </button>
        </div>

        <div>
          <img src={image} className="h-[70vh] object-cover w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;

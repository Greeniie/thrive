import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
};

const Business = ({ business }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{ fontFamily: "DM Sans" }}
      className=" flex flex-col justify-between h-[316px] bg-white rounded shadow p-3"
    >
      <div className="text-center">
        <div>
          <img
            src={
              business.business_logo
                ? business.business_logo
                : "https://randomuser.me/api/portraits/men/36.jpg"
            }
            alt=""
            className="h-[80px] w-[80px] mx-auto rounded-full object-cover"
          />
        </div>
        <div></div>
        <div className="pt-2">{business?.business_name}</div>
      </div>

      <div className="text-center">
        <button
          className="bg-[#ff0000] text-white rounded-sm py-2 px-3"
          onClick={handleOpen}
        >
          View Business
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-[85%] md:w-[50%]">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex gap-3 items-center justify-center md:justify-start p-3 md:p-10">
              <div>
                <img
                  src={
                    business.business_logo
                      ? business.business_logo
                      : "https://randomuser.me/api/portraits/men/36.jpg"
                  }
                  alt=""
                  className="h-[50px] w-[50px] md:h-[80px] md:w-[80px] mx-auto rounded-full object-cover"
                />
              </div>
              <div style={{ fontFamily: "DM Sans", textAlign: "center" }}>
                {business.business_name}
              </div>
              <div style={{ fontFamily: "DM Sans", textAlign: "center" }}>
                {business.business_address}
              </div>
            </div>
          </Typography>
          
          
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontFamily: "DM Sans" }}
            className="h-[300px] p-3 md:p-5 pt-0 mt-0 overflow-scroll"
          >
            {business.business_description}
          </Typography>
          <div className="text-center">
            <button className="bg-[#ff0000] text-white rounded-sm py-2 px-3 m-3">
              Learn More
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Business;

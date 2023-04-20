import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";


const MainHeader = () => {
  const admin = "GIZ";



const date = moment().format("dddd, MMM Do YYYY")

  return (
    <div className="mainheader">
      <div className="dashboard-date" style={{ color: "#6B7280" }} >{date}</div>
      <div className="admin-profile" style={{ color: "#6B7280" }} >
        <div>
          {" "}
          <Avatar
            alt={admin}
            src={`https://ui-avatars.com/api/name=${admin}?background=eca44c`}
          ></Avatar>
        </div>
        <div>
          <div>{admin}</div>
          <div>Admin</div>
        </div>
        <div>
          <IconButton>
            <NotificationsNoneIcon style={{ color: "#eca44c" }} />
          </IconButton>
        </div>
        <div>
              <IconButton
              >
                <MoreVertIcon style={{ color: "#6B7280" }} />
              </IconButton>
            
            </div>
      </div>
    </div>
  );
};

export default MainHeader;

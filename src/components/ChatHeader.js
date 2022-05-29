import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedicon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/sendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <div className="chatHeader_left">
        <h3>
          <span className="chatHeader_left">#</span>
        </h3>
      </div>
      <div className="chatHeader_right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
      </div>
      <div className="chatheader_search">
        {" "}
        <input placeholder="Search here" />
        <SearchRoundedicon />
      </div>
      <SendRoundedIcon />
      <HelpRoundedIcon />
    </div>
  );
}

export default ChatHeader;

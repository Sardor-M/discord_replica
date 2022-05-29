import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <div>
        <Avatar />
      </div>
      <div className="message_info">
        <h4>
          {" "}
          Steven James
          <span className="message_timestamp">Timestamp</span>{" "}
        </h4>
        <p placeholder="Message"></p>
      </div>
    </div>
  );
}

export default Message;

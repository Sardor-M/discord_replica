import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Chat() {
  return (
    <div className="chat ">
      <div className="chat_messages"></div>
      <div className="chat_input">
        <AddCircleIcon forntSize="large" />
      </div>
    </div>
  );
}

export default Chat;

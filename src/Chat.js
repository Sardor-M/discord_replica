import React from "react";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GiftIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
function Chat() {
  return (
    <div className="chat ">
      <Message />
      <div className="chat_messages"></div>
      <div className="chat_input">
        <AddCircleIcon forntSize="large" />
        <form input placeholder="Message #TESTCHANNEL"></form>
        <button className="chat_inputButton" type="submit">
          {" "}
          Send Message
        </button>
        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GiftIcon fontSize="large" />
          <EmojiEmotionsIcon forntSize="karge" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

import React from "react";
import "./Chat.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GiftIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "../features/appSlice";
import { selectUser } from "./features/userSlice";
import { useState } from "react";
import db from "./Firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collectionm("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat ">
      <Message />
      <div className="chat_messages"></div>
      <div className="chat_input">
        <AddCircleIcon forntSize="large" />
        <form
          disabled={!channelId}
          input
          placeholder="Message #TESTCHANNEL"
        ></form>
        <button
          className="chat_inputButton"
          disabled={!channelId}
          type="submit"
        >
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

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
import { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";
import ChatHeader from "./ChatHeader";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

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
      <ChatHeader channelName={channelName} />
      <div className="chat_messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat_input">
        <AddCircleIcon forntSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <button
            className="chat_inputButton"
            disabled={!channelId}
            type="submit"
            onClick={sendMessage}
          >
            {" "}
            Send Message
          </button>
        </form>

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

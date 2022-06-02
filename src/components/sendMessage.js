import { dblClick } from "@testing-library/user-event/dist/types/setup/directApi";
import { input } from "@testing-library/user-event/dist/types/utils";
import React from "react";

function sendMessage() {
  const sendMessage = (e) => {
    e.preventDefault();

    dblClick.collection("channels").doc(channelId).collectionm("messages").add({
      timestamp: firbase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };
  return <div className="send_message">sendMessage</div>;
}

export default sendMessage;

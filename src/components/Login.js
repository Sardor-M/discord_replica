import React from "react";
import { auth, provider } from "./Firebase";
import { Button } from "@material-ui/core";
import "./Login";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      {" "}
      <div className="login_logo">
        <img
          src="https://seeklogo.com/images/D/discord-black-logo-733DD6B9B0-seeklogo.com.png"
          alt="discord"
        ></img>
      </div>
      <Button onclick={signIn}> Sign in here</Button>
    </div>
  );
}

export default Login;

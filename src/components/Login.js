import React from "react";
import { auth, provider } from "./Firebase";

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
        <Button onclick={signIn}> Sign in here</Button>
      </div>
    </div>
  );
}

export default Login;

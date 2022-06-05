import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from ".//components/Chat";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.ptotoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // user logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {" "}
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default App;

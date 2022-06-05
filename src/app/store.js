import { configureStore } from "@reduxjs/toolkit";
import userReducer from "src/features/userSlice";
import appReducer from "src/features/appSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});

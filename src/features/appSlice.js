import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    app: null,
    channelId: null,
    channelName: null,
  },
  reducers: {
    login: (state, action) => {
      state.app = action.payload;
    },
    logout: (state) => {
      state.app = null;
    },
  },
});

export const { login, logout } = appSlice.actions;

export const selectUser = (state) => state.app.app;

export const selectChannelId = (state) => state.app.channelId;

export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    username: null,
    token: null,
  },
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    logout(state) {
      state.userId = null;
      state.username = null;
      state.token = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { AuthUser } from "../../types/data";

const initialState: AuthUser = {
  id: 1,
  email: "email",
  token: "123",
};

const authSlice = createSlice({
  name: "auth",
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.id = undefined;
      state.email = "";
      state.token = "";
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type authState = {
  isAuthenticated: boolean;
};

const initialState: authState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});
console.log(authSlice);
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
console.log(authSlice.reducer);

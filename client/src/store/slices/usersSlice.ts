import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserProps, UserState } from "../../types/data";
import axios from "axios";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await axios.get("http://localhost:3001/api/users", {
      headers: { Authorization: state.auth.token },
    });
    return response.data;
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (users: Omit<UserProps, "id">, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await axios.post(
      "http://localhost:3001/api/users",
      users,
      {
        headers: { Authorization: state.auth.token },
      }
    );
    return response.data;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default usersSlice;

import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk } from "./authOperations";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
  stateChange: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
    });
  },
});

export const authReducer = authSlice.reducer;

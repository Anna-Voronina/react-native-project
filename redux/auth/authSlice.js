import { createSlice } from "@reduxjs/toolkit";
import { signUpThunk } from "./authOperations";

const initialState = {
  user: {
    id: null,
    name: null,
  },
  stateChange: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const authReducer = authSlice.reducer;

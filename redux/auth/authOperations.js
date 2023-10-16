import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = auth.currentUser;

      await updateProfile(user, {
        displayName: name,
      });

      const data = {
        user: {
          name: user.displayName,
          email: user.email,
          id: user.uid,
        },
      };

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

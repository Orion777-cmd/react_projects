import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    googleSignInStartAction: (state) => {
      state.isLoading = true;
    },
    googleSignInSuccessAction: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    googleSignInFailureAction: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error.message;
    },
    emailSignInStartAction: (state) => {
      state.isLoading = true;
    },
    emailSignInSuccessAction: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    emailSignInFailureAction: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  setCurrentUser,
  googleSignInFailureAction,
  googleSignInStartAction,
  googleSignInSuccessAction,
  emailSignInFailureAction,
  emailSignInStartAction,
  emailSignInSuccessAction,
} = userSlice.actions;

export default userSlice.reducer;
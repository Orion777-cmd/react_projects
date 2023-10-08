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
    signInSuccessAction: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    signInFailureAction: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    emailSignInStartAction: (state) => {
      state.isLoading = true;
    },
    
    checkUserSessionAction: (state) => {
      state.isLoading = true;
    }
  },
});

export const {
  setCurrentUser,
  googleSignInStartAction,
  signInFailureAction,
  signInSuccessAction,
  emailSignInStartAction,
  checkUserSessionAction,
} = userSlice.actions;

export default userSlice.reducer;
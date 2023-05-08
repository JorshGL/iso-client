import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { instructorsSlice } from "./instructors/instructors.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    instructors: instructorsSlice.reducer
  }
})
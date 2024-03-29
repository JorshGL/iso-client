import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      user,
      loading: false,
      error: null,
    };
  },
  reducers: {
    setUser: (state, action) => {
      state.error = null;
      state.loading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setError, setLoading } = authSlice.actions;

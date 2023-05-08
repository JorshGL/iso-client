import { createSlice } from "@reduxjs/toolkit";

export const instructorsSlice = createSlice({
  name: "instructors",
  initialState: () => {
    return {
      instructors: [],
      loading: false,
      error: null,
    };
  },
  reducers: {
    setInstructors: (state, action) => {
      state.error = null;
      state.loading = false;
      state.instructors = action.payload;
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


export const { setInstructors, setError, setLoading } = instructorsSlice.actions;
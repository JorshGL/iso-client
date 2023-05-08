import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { setError, setInstructor, setInstructors, setLoading } from "./instructors.slice";

export const fetchInstructors = createAsyncThunk(
  "instructors/fetchInstructors",
  async (payload, { dispatch }) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const { data: response } = await api.get(
        `/users/instructors?${payload?.filterBy}=${payload?.searchString}`
      );
      if (!response.success) throw new Error(response.message);
      dispatch(setInstructors(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
);

export const fetchInstructorById = createAsyncThunk(
  "instructors/fetchInstructorById",
  async (payload, { dispatch }) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const { data: response } = await api.get(`/users/user/${payload}`);
      if (!response.success) throw new Error(response.message);
      dispatch(setInstructor(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
);

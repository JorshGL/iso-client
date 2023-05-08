import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { setError, setInstructors, setLoading } from "./instructors.slice";

export const fetchInstructors = createAsyncThunk(
  "instructors/fetchInstructors",
  async (payload, { dispatch }) => {
    try {
      dispatch(setError(null));
      dispatch(setLoading(true));
      const { data: response } = await api.get(
        `/users/instructors?${payload?.filterBy}=${payload?.searchString}`
      );
      console.log(response)
      dispatch(setInstructors(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
);

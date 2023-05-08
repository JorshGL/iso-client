import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setLoading, setUser } from "./auth.slice";
import { api } from "../../api/api";
import { object, string } from "yup";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(setError(null));
      const credentialsSchema = object({
        email: string().email().required(),
        password: string().required(),
      });

      await credentialsSchema.validate({ email, password });

      dispatch(setLoading(true));
      const { data: response } = await api.post("/auth/login", {
        email,
        password,
      });
      if (!response.success) throw new Error(response.message);

      localStorage.setItem("jwt", response.data.token);
      dispatch(setUser(response.data.user));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
);

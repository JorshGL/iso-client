import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError, setLoading, setUser } from "./auth.slice";
import { api } from "../../api/api";
import { object, string } from "yup";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    try {
      dispatch(setError(null));
      const credentialsSchema = object({
        email: string()
          .email("Por favor, ingrese un email válido.")
          .required("Por favor, complete todos los campos"),
        password: string().required("Por favor, complete todos los campos"),
      });

      await credentialsSchema.validate({ email, password });

      dispatch(setLoading(true));
      const { data: response } = await api.post("/auth/login", {
        email,
        password,
      });
      console.log(response);
      if (!response.success)
        throw new Error(response.message);

      localStorage.setItem("jwt", response.data.token);
      dispatch(setUser(response.data.user));
      toast.success("Bienvenido");
    } catch (error) {
      dispatch(setError('Usuario o contraseña incorrectos'));
    }
  }
);

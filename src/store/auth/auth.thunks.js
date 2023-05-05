import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "./auth.slice";

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { dispatch }) => {
    dispatch(setUser({
      name: "John Doe",
      email: "example@uao.edu.co",
      career: "Ingeniería informática",
      faculty: "Ingeniería",
      semester: 5,
      picture: "https://picsum.photos/200",
      role: {
        name: "student",
        permissions: {
          canEditOwnProfile: true,
          canViewOwnCalendar: true,
          canEditSubjects: false,
        }
      }
    }));
  }
)
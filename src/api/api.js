import axios from "axios";

export const api = axios.create({
  baseURL: 'https://ceassist-backend.onrender.com/api',
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
  },
});

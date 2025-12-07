import axios, { type AxiosInstance } from "axios";
import { store } from "../store";
import type { RootState } from "../store";

const baseURL = "http://localhost:3000"; //Todo ภายหลัง

const api : AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    try {
      const state : RootState = store.getState();
      const token = state.auth?.accessToken;

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.warn("Error ", err);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
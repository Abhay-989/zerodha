import { create } from "zustand";
import axios from "axios";

// If token exists from previous session, set default Authorization header
const existingToken = localStorage.getItem("token");
if (existingToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${existingToken}`;
}

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  signup: async ({name, email, password}) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/signup",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      // store token and set default auth header
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      }
      set({ user: res.data.user, loading: false });
      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Signup failed",
        loading: false,
      });
      return false;
    }
  },

  login: async ({email, password}) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      }
      set({ user: res.data.user, loading: false });
      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },

  logout: () => set({ user: null }),
}));

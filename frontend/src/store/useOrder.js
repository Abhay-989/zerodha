import { create } from "zustand";
import axios from "axios";

export const useOrderStore = create((set) => ({
  orders: [],
  loading: false,
  error: null,

  placeOrder: async ({ name, qty, price, mode }) => {
    set({ loading: true, error: null });

    try {
      await axios.post(
        "http://localhost:3002/api/orders",
        { name, qty, price, mode },
        { withCredentials: true }
      );

      // Refresh orders after placing one
      const res = await axios.get("http://localhost:3002/api/orders", {
        withCredentials: true,
      });

      set({ orders: res.data, loading: false });
      return true;
    } catch (err) {
      console.error("Order failed:", err);
      set({ error: err.response?.data?.message || "Order failed", loading: false });
      return false;
    }
  },

  fetchOrders: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:3002/api/orders", {
        withCredentials: true,
      });
      set({ orders: res.data, loading: false });
    } catch (err) {
      set({ loading: false });
    }
  },
}));

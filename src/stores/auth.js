import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username,
          password,
        });
        this.token = response.data.token;
        this.user = response.data;
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.error("Failed to login", error);
      }
    },
    async getUser() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/auth/users/me",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        this.user = response.data;
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    user: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post("https://your-mock-api/login", {
          email,
          password,
        });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.error("Failed to login", error);
      }
    },
    async signup(email, password) {
      try {
        const response = await axios.post("https://your-mock-api/signup", {
          email,
          password,
        });
        this.token = response.data.token;
        this.user = response.data.user;
        localStorage.setItem("token", this.token);
      } catch (error) {
        console.error("Failed to signup", error);
      }
    },
    logout() {
      this.token = "";
      this.user = null;
      localStorage.removeItem("token");
    },
  },
});

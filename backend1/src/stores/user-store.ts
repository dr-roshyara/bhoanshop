/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import type { LoggedUser } from "@/types/store";
import { useApi } from "@/api/user-api";

const api = useApi();

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    loggedUser:
      (null as LoggedUser) | JSON.parse(localStorage.getItem("loggedUser")),
    returnUrl: null,
  }),

  actions: {
    updateState(payload) {
      const newUserState = { ...this.state, ...payload };
      localStorage.removeItem("loggedUser");
      localStorage.setItem("loggedUser", JSON.stringify(newUserState));
      this.$reset();
    },

    async loggedUserInfo() {
      const { data: loggedUser } = await api.get("/user");
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      this.$reset();
    },
  },
});

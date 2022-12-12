/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";
import { useApi } from "@/api/user-api";

const api = useApi();

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
  }),
  //   state: () =>
  //     JSON.parse(localStorage.getItem("USER_INFO")) ?? {
  //       id: null,
  //       name: "guest",
  //       email: null,
  //     },

  actions: {
    updateState(payload) {
      const newUserState = { ...this.state, ...payload };
      localStorage.removeItem("USER_INFO");
      localStorage.setItem("USER_INFO", JSON.stringify(newUserState));
      this.$reset();
    },

    async storeInfo() {
      const { data: userInfo } = await api.get("/user");
      localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
      this.$reset();
    },
  },
});

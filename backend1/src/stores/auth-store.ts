/* eslint-disable prettier/prettier */
// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type LoginUser from "@/types/store";
import type LoggedUser from "@/types/store";
import { fetchWrapper } from "@/helpers/fetch-wrapper";
import { useUserStore } from "@/stores/user-store";
import { useApi } from "@/api/user-api";
import axios from "axios";
const web = useApi("web", "");
const api = useApi("api", "/login");
import { useRouter } from "vue-router";
import { router } from "@/router/index";
//Read this page to understand authnication via axios
// https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
// https://jasonwatmore.com/post/2022/07/25/vue-3-pinia-user-registration-and-login-example-tutorial#router-index-js
export const useAuthStore = defineStore("user", {
  state: () => {
    return {
      returnUrl: "",
      // for data that is not yet loaded
      loginUser: null as LoginUser | null,
      loggedUser: null as LoggedUser | null,
    };
  },
  getters: {
    getReturnUrl(): any {
      return this.returnUrl;
    },
  },
  actions: {
    async csrf() {
      //   const BASE_URL = import.meta.VITE_BASE_URL;
      await web.get("/sanctum/csrf-cookie");
    },

    async login(loginUser: LoginUser) {
      console.log(loginUser.email);
      console.log(loginUser.password);
      // console.log(import.meta.env.VITE_API_URL);
      const LOGIN_URL = import.meta.env.VITE_API_URL + "/login";
      console.log(LOGIN_URL);
      try {
        const response = await axios.post(LOGIN_URL, {
          email: loginUser.email,
          password: loginUser.password,
        });
        console.log(response);
        // this.$state.loggedUser = response.data.user;
        // console.log(this.$state.loginUser);
        // localStorage.setItem("token", response.data.token);
        // await router.push({ path: "/dashboard" });
        // //     // this.updateState({ loginUser.email, isLoggedIn: true });
        // //     // await user.storeInfo();
      } catch (error) {
        console.log("Error at login: ", error.message);
        throw error;
      }
    },
    async fetchUser() {},
    //sign up function
    async signUp(user: User) {
      //   const res = await fetch("https://bhojan.shop/api/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       first_name: user.first_name,
      //       last_name: user.last_name,
      //       email: user.email,
      //       password: user.password,
      //       "password-confirmation": user.password,
      //     }),
      //   });
      //   const newUser = await res.json();
      //   this.user = newUser;
    },
    //sign in function
    async signIn(email: string, password: string) {
      //   const res = await fetch("https://bhojan.shop/api/login", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //     }),
      //   });
      //   const user = await res.json();
      //   this.user = user;
    },
    //logout
    async logout() {
      const user = useUserStore();
      // const router = useRouter();

      localStorage.clear(); // always clean localStorage before reset the state
      this.$reset();
      user.$reset();

      console.log("logout");
    },
  },
});

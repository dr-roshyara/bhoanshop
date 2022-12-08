// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "./type";
//Read this page to understand authnication via axios
// https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
// https://jasonwatmore.com/post/2022/07/25/vue-3-pinia-user-registration-and-login-example-tutorial#router-index-js
export const useAuthStore = defineStore("user", {
    state: () => ({
        user: {
            token: "1234" as string,
        },
        returnUrl: "" as string,
    }),

    getters: {
        getUser(): any {
            return this.user;
        },
        getReturnUrl(): any {
            return this.returnUrl;
        },
    },
    actions: {
        async fetchUser() {},
        //sign up function
        async signUp(user: User) {
            const res = await fetch("https://bhojan.shop/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    password: user.password,
                    "password-confirmation": user.password,
                }),
            });
            const newUser = await res.json();
            this.user = newUser;
        },
        //sign in function
        async signIn(email: string, password: string) {
            const res = await fetch("https://bhojan.shop/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const user = await res.json();
            this.user = user;
        },
    },
});

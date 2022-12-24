/* eslint-disable prettier/prettier */
// import { ref, computed } from "vue";
import { defineStore } from 'pinia'
import type { LoginUser } from '@/types/store'
import type { NewUser } from '@/types/store'
import type { LoggedUser } from '@/types/store'
// import type LoggedUser from "@/types/store";
import { setAuthUser, loginCallback, logout } from '@/utils/helper'
import axios from 'axios'
import { router } from '@/router/register/index'
//Read this page to understand authnication via axios
// https://upmostly.com/vue-js/how-to-use-vue-with-pinia-to-set-up-authentication
// https://jasonwatmore.com/post/2022/07/25/vue-3-pinia-user-registration-and-login-example-tutorial#router-index-js
export const useAuthStore = defineStore('user', {
  state: () => {
    return {
      returnUrl: '',
      // for data that is not yet loaded
      authUser: null as LoggedUser | null,
      errorMessage: 'Either user email or password is wrong.' as string,
      loginError: false as Boolean,
    }
  },
  getters: {
    getReturnUrl(): any {
      return this.returnUrl
    },
  },
  actions: {
    async login(logUser: LoginUser) {
      const LOGIN_URL = import.meta.env.VITE_API_URL + '/login'
      const SANCTUM_URL = import.meta.env.VITE_BASE_URL + '/sanctum/csrf-cookie'
      console.log(LOGIN_URL)
      try {
        const sanctum_response = await axios.get(SANCTUM_URL)
        console.log(sanctum_response.config)
        // console.log(sanctum_response.config.transformResponse)

        const response = await axios.post(LOGIN_URL, {
          email: logUser.email,
          password: logUser.password,
        })
        // console.log(response.data.user);
        this.$state.authUser = response.data.user
        this.updateLocalStorage(response)

        await router.push({ path: '/dashboard' })
        return {
          user: response.data.user,
          loginError: this.$state.loginError,
          errorMessage: '',
        }
      } catch (error) {
        this.$state.loginError = true
        return this.showLoginError()
        throw error
      }
    },
    updateLocalStorage(response: any) {
      if (this.$state.authUser) {
        setAuthUser(this.$state.authUser)
        loginCallback(this.$state.authUser.token)

        // helper.localStorage.setItem('user', JSON.stringify(response.data.user))
        // const user = localStorage.getItem("user");
        // console.log(user);
      } else {
        localStorage.removeItem('user')
      }
    },
    showLoginError() {
      // this.$state.loginError = true;
      // console.log(this.$state.errorMessage);
      return {
        errorMessage: this.$state.errorMessage,
        loginError: this.$state.loginError,
      }
    },
    //sign up function
    async register(user: NewUser) {
      const REGISTER_URL = import.meta.env.VITE_API_URL + '/register'
      const SANCTUM_URL = import.meta.env.VITE_API_URL + '/sanctum/csrf-cookie'

      console.log(REGISTER_URL)
      try {
        // const response_sanctum = await axios.post(SANCTUM_URL)
        // console.log(response_sanctum)
        const response = await axios.post(REGISTER_URL, user)
        console.log(response.data.user)
        this.$state.authUser = response.data.user
        console.log(this.$state.authUser)
        this.updateLocalStorage(response)

        await router.push({ path: '/dashboard' })
        return {
          user: response.data.user,
          loginError: this.$state.loginError,
          errorMessage: '',
        }
      } catch (error) {
        this.$state.loginError = true
        return this.showLoginError()
        throw error
      }

      // await router.push({ path: "/dashboard" });
      return {
        user: user,
        loginError: this.$state.loginError,
        errorMessage: '',
      }
    },
    //logout
    async logout() {
      logout()
    },
  },
})

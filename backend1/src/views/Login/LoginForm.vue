<template>
  <GuestLayout>
    <!-- <section class="mx-auto md:max-w-2xl"> -->
    <div
      class="min-w-screen min-h-screen flex flex-col items-center justify-center"
    >
      <section
        class="bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden p-2 md:p-6"
        style="max-width: 1000px"
      >
        <h1 class="text-center font-bold text-gray-700 text-xl">Login form</h1>
        <div class="mx-auto w-full h-full text-gray-800">
          <div class="w-full flex flex-col min-w-full mx-auto py-4">
            <!-- Here starts the form  -->
            <div v-if="loginError">
              <p class="text-center text-red-600 text-sm font-bold">
                {{ errorMessage }}
              </p>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="loginFn">
              <input type="hidden" name="remember" value="true" />

              <!-- email  -->
              <text-input
                v-model="credentials.email"
                type="email"
                name="email"
                label-name="Email"
              ></text-input>
              <!-- password  -->
              <text-input
                v-model="credentials.password"
                name="password"
                type="password"
                label-name="Password"
                class="mt-1 block w-full"
                required
                autocomplete="current-password"
              ></text-input>

              <div
                class="flex px-2 md:px-3 text-sm tracking-tighter justify-start space-x-4"
              >
                <div class="flex flex-start">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="remember-me"
                    class="ml-2 block text-sm text-gray-900"
                    >Remember me</label
                  >
                </div>

                <div class="">
                  <router-link
                    to="/reqpass"
                    class="text-indigo-700 text-sm hover:text-indigo-500"
                  >
                    Forgot your password?
                  </router-link>
                </div>
              </div>
              <!-- Submit button -->
              <submit-button title="Login"></submit-button>

              <!-- end of button  -->
              <div
                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p class="text-center text-sm mx-4 mb-0">Or continue with</p>
              </div>

              <div
                class="bg-sky-800 hover:bg-slate-300 rounded-lg px-6 md:px-7 mx-2 mb-4"
              >
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="px-7 py-6 rounded-lg text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                >
                  <!-- Facebook -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    class="w-3.5 h-3.5 mr-2"
                  >
                    <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                  <span class="text-sm tracking-tighter"> Facebook </span>
                </button>
              </div>
              <!-- Twitter -->
              <!-- Google -->
              <div
                class="bg-red-500 hover:bg-red-200 hover: text-slate-100 rounded-lg px-6 md:px-7 mx-2 mt-2"
              >
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="px-7 py-6 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    class="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                  oogle
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </GuestLayout>
</template>
<!-- eslint-disable prettier/prettier -->
<script lang="ts">
import SubmitButton from "@/Components/SubmitButton.vue";
import TextInput from "@/Components/Form/TextInput.vue";
import { defineComponent, reactive } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { useAuthStore } from "@/stores/auth-store";
import GuestLayout from "@/Layouts/GuestLayout.vue";
export default defineComponent({
  setup() {
    const errorMessage: Ref<string> = ref("");
    const loginError: Ref<Boolean> = ref(false);
    const auth = useAuthStore();
    const credentials = reactive({
      email: "" as string,
      password: "" as string,
    });
    const loginFn = async () => {
      //   console.log(credentials);
      errorMessage.value = "";
      const response = await auth.login(credentials);
      // console.log(response);
      if (response?.loginError) {
        errorMessage.value = response.errorMessage;
        loginError.value = true;
      }
    };
    return { credentials, errorMessage, loginError, loginFn };
  },
  methods: {},
  components: {
    SubmitButton,
    GuestLayout,
    TextInput,
  },
});
</script>
<style scoped></style>

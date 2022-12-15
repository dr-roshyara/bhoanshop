<template>
  <guest-layout>
    <div class="min-w-screen min-h-screen flex items-center justify-center p-2">
      <div
        class="bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style="max-width: 1000px"
      >
        <div class="md:flex w-full">
          <div class="w-full py-10 px-5 md:px-10">
            <div class="text-center mb-10">
              <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <form @submit.prevent="registerFn">
              <text-input
                v-model="user.first_name"
                type="text"
                name="firstname"
                label-name="First name"
                placeholder="Nab"
              ></text-input>
              <!-- Last name  -->
              <text-input
                v-model="user.last_name"
                type="text"
                name="lastname"
                label-name="Last name"
                placeholder="Nab"
              ></text-input>
              <!-- password  -->

              <div class="flex flex-col">
                <div class="w-full px-3 mb-5">
                  <label for="" class="text-xs font-semibold px-1">Email</label>
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i
                        class="mdi mdi-email-outline text-gray-400 text-lg"
                      ></i>
                    </div>
                    <input
                      type="email"
                      v-model="user.email"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-xs font-semibold px-1"
                    >Password</label
                  >
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      v-model="user.password"
                      type="password"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <!-- password confirmation  -->
              <div class="flex flex-col">
                <div class="w-full px-3 mb-12">
                  <label for="" class="text-xs font-semibold px-1"
                    >Password confirmation</label
                  >
                  <div class="flex">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      id="password_confirmation"
                      v-model="user.password_confirmation"
                      type="password"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <!-- Submit button -->
              <div class="flex flex-col">
                <div class="w-full px-3 mb-5">
                  <button
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </guest-layout>
</template>
<script lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { defineComponent, reactive, ref } from "vue";
import type { Ref } from "vue";
import { useAuthStore } from "@/stores/auth-store";
import type { NewUser } from "@/types/store";
import TextInput from "@/Components/Form/TextInput.vue";
export default defineComponent({
  setup() {
    const errorMessage: Ref<string> = ref("");
    const loginError: Ref<Boolean> = ref(false);
    const auth = useAuthStore();
    const user: NewUser = reactive({
      first_name: "" as string,
      last_name: "" as string,
      email: "" as string,
      password: "" as string,
      password_confirmation: "" as string,
    });
    const registerFn = async () => {
      //   console.log(credentials);
      errorMessage.value = "";
      const response = await auth.register(user);
      // console.log(response);
      if (response?.loginError) {
        errorMessage.value = response.errorMessage;
        loginError.value = true;
      }
    };
    return { user, errorMessage, loginError, registerFn };
  },
  methods: {
    register() {
      console.log("register function");
    },
  },
  components: {
    GuestLayout,
    TextInput,
  },
});
</script>
<style scoped></style>

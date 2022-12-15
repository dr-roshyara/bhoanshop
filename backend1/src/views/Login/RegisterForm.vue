<template>
  <guest-layout>
    <div
      class="min-w-screen min-h-screen flex items-center justify-center md:p-2"
    >
      <div
        class="bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style="max-width: 1000px"
      >
        <div class="md:flex w-full">
          <div class="w-full py-10 px-2 md:px-10">
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
              <!-- email  -->
              <text-input
                v-model="user.email"
                type="email"
                name="email"
                label-name="Email"
              ></text-input>

              <!-- password  -->
              <text-input
                v-model="user.password"
                type="password"
                name="password"
                label-name="Password"
              ></text-input>
              <!-- password conformation  -->
              <text-input
                v-model="user.password_confirmation"
                type="password"
                name="password_confirmation"
                label-name="Password Confirmation"
              ></text-input>

              <!-- Submit button -->
              <submit-button title="Register"></submit-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </guest-layout>
</template>
<script lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import SubmitButton from "@/Components/SubmitButton.vue";
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
    SubmitButton,
  },
});
</script>
<style scoped></style>

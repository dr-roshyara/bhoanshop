<!-- eslint-disable prettier/prettier -->
<template>
  <guest-layout>
    <div>
      <form @submit.prevent="registerFn">
        <text-input
          v-model="restaurant.name"
          type="text"
          name="namastenepal"
          labelName="Name"
          class="mt-1 block w-full"></text-input>
        <text-input
          v-model="restaurant.password"
          name="password"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="current-password"
          label-name="Password"></text-input>

        <button type="submit">Submit</button>
      </form>
    </div>
  </guest-layout>
</template>
<script lang="ts">
import TextInput from '@/Components/Form/TextInput.vue'
import { defineComponent, reactive, ref } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
// import type { Ref } from "vue";
// import { useAuthStore } from "@/stores/auth-store";
// import type { NewUser } from "@/types/store";
export default defineComponent({
  setup() {
    const email = ref('')
    // output value key by key
    // const onInput = (e: { target: { value: string } }) => {
    //   email.value = e.target.value;
    // };
    // const errorMessage: Ref<string> = ref("");
    // const loginError: Ref<Boolean> = ref(false);
    // const auth = useAuthStore();
    const restaurant = reactive({
      name: '' as string,
      email: '' as string,
      password: '' as string,
      password_confirmation: '' as string,
    })
    const registerFn = async () => {
      console.log(restaurant)
      //   errorMessage.value = "";
      //   const response = await auth.register(user);
      //   // console.log(response);
      //   if (response?.loginError) {
      //     errorMessage.value = response.errorMessage;
      //     loginError.value = true;
      //   }
    }
    return {
      email,
      restaurant,
      // errorMessage,
      // loginError,
      registerFn,
    }
  },
  methods: {
    register() {
      console.log('register function')
    },
  },
  components: {
    TextInput,
    GuestLayout,
  },
})
</script>

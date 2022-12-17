<!-- eslint-disable prettier/prettier -->
<template>
  <guest-layout>
    <div class="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <section
        class="bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden p-2 md:p-6"
        style="max-width: 1000px">
        <h1 class="text-center font-bold text-gray-700 text-xl">Register Restaurant</h1>
        <div class="mx-auto w-full h-full text-gray-800">
          <div class="w-full flex flex-col min-w-full mx-auto py-4">
            <!-- Here starts the form  -->
            <div v-if="loginError">
              <p class="text-center text-red-600 text-sm font-bold">
                {{ errorMessage }}
              </p>
            </div>
            <form @submit.prevent="registerFn">
              <text-input
                v-model="restaurant.name"
                type="text"
                name="namastenepal"
                labelName="Name"
                class="mt-1 block w-full"></text-input>
              <!-- next  -->
              <text-input
                v-model="restaurant.ownerName"
                name="owner-name"
                type="text"
                class="mt-1 block w-full"
                required
                label-name="Owner's name"></text-input>
              <!-- next  -->
              <text-input
                v-model="restaurant.contactPerson"
                name="contact-person"
                type="text"
                class="mt-1 block w-full"
                required
                label-name="Contact person"></text-input>
              <!-- next  -->
              <text-input
                v-model="restaurant.telephone"
                name="telephone"
                type="text"
                class="mt-1 block w-full"
                required
                label-name="Telephone *"></text-input>
              <!-- next  -->
              <text-input
                v-model="restaurant.email"
                name="email"
                type="text"
                class="mt-1 block w-full"
                required
                label-name="Email*"></text-input>

              <!-- next  -->
              <text-input
                v-model="restaurant.vatId"
                name="vatId"
                type="text"
                class="mt-1 block w-full"
                required
                label-name="VatId*"></text-input>

              <submit-button title="Register"></submit-button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </guest-layout>
</template>
<script lang="ts">
import TextInput from '@/Components/Form/TextInput.vue'
import { defineComponent, reactive, ref } from 'vue'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import SubmitButton from '@/Components/SubmitButton.vue'
import type { Ref } from 'vue'
// import { useAuthStore } from "@/stores/auth-store";
// import type { NewUser } from "@/types/store";
export default defineComponent({
  setup() {
    const email = ref('')
    // output value key by key
    // const onInput = (e: { target: { value: string } }) => {
    //   email.value = e.target.value;
    // };
    const errorMessage: Ref<string> = ref('')
    const loginError: Ref<Boolean> = ref(false)
    // const auth = useAuthStore();
    const restaurant = reactive({
      name: '' as string,
      ownerName: '' as string,
      contactPerson: '' as string,
      telephone: '' as string,
      email: '' as string,
      vatId: '' as string,
    })
    const registerFn = async () => {
      console.log(restaurant)
      errorMessage.value = ''
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
      errorMessage,
      loginError,
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
    SubmitButton,
  },
})
</script>

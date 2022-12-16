<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <GuestLayout title="Request new password">
    <div class="min-w-screen min-h-screen flex flex-col items-baseline md:items-center md:justify-center p-2">
      <div
        class="bg-slate-50 text-gray-500 rounded-3xl shadow-xl w-full md:w-2/3 overflow-hidden"
        style="max-width: 1000px mx-auto">
        <div class="flex flex-col md:p-4 text-center mx-auto md: max-w-lg mb-2 md:mb-3">
          <h1 class="text-gray-700 text-lg font-bold py-2">Request to Reset Password</h1>
          <form class="flex flex-col my-4 mb-3" @submit.prevent="onSbumitFn">
            <!-- Submit button -->
            <!-- email  -->
            <text-input v-model="email" type="email" name="email" label-name="Email"></text-input>
            <submit-button title="Submit"></submit-button>
          </form>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>

<script lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue'
import SubmitButton from '@/Components/SubmitButton.vue'
import TextInput from '@/Components/Form/TextInput.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    // const errorMessage: Ref<string> = ref("");
    // const loginError: Ref<Boolean> = ref(false);
    // const auth = useAuthStore();
    const email = ref('')
    // email.value = "info@namastenepal.de";
    const onSbumitFn = async () => {
      console.log(email)
    }
    return { email, onSbumitFn }
  },
  components: {
    GuestLayout,
    SubmitButton,
    TextInput,
  },
})
</script>

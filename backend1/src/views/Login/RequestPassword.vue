<!-- eslint-disable prettier/prettier -->
<template>
  <GuestLayout title="Request new password">
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required="true"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <router-link
            :to="{ name: 'login' }"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remember your password?
          </router-link>
        </div>
      </div>

      <!-- Submit button -->
      <submit-button title="Submit"></submit-button>
    </form>
  </GuestLayout>
</template>

<script lang="ts">
import GuestLayout from "@/Layouts/GuestLayout.vue";
import SubmitButton from "@/Components/SubmitButton.vue";
export default {
  components: {
    GuestLayout,
    SubmitButton,
  },
};
</script>

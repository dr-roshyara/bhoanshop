<template>
  <div class="flex flex-col justify-center items-center">
    <button @click="store.logout()">Logout</button>
    <p class="px-2 py-4 bg-green-100 w-96 font-bold rounded-lg hover:bg-indigo-300">
      <router-link to="/restaurant">Register your Restaurant </router-link>
    </p>
    <h1>Dashboard of {{ store.authUser?.name }}</h1>
  </div>
</template>
<script lang="ts">
import SubmitButton from '@/Components/SubmitButton.vue'
import { useAuthStore } from '@/stores/auth-store'
import { RouterLink } from 'vue-router'
export default {
  setup() {
    const store = useAuthStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
  methods: {
    getStore() {
      console.log(this.store)
    },
  },
  components: {
    SubmitButton,
    RouterLink,
  },
}
</script>
<style scoped></style>

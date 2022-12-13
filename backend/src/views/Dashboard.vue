<template>
  <button @click="store.logout()">Logout</button>
  <h1>Dashboard of {{ store.loggedInUser?.name }}</h1>
</template>
<script lang="ts">
import { useAuthStore } from "@/stores/auth-store";

export default {
  setup() {
    const store = useAuthStore();

    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  methods: {
    getStore() {
      console.log(this.store);
    },
  },
};
</script>
<style scoped></style>

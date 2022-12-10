<template>
    <h1>Dashboard form</h1>
    <button @click="getStore()">Click here</button>
    <router-link to="/login">Go to Login</router-link>
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

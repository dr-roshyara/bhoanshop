<script setup>
import { ref, computed } from "vue";
import store from "../store";
const test = computed(() => store.state.test);

defineProps({
    msg: String,
});

const count = ref(0);
</script>

<template>
    <div class="flex justify-center space-x-4">
        <router-link to="/dashboard">Go to Dashboard</router-link>

        <router-link to="/login">Go to Login</router-link>
    </div>
    <h1>{{ msg }}</h1>
    {{ test }}
    <div class="card">
        <button type="button" @click="count++">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
        </p>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

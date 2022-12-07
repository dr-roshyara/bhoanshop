<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
    name: "App",
    components: {
        RouterLink,
        RouterView,
    },
    data() {
        return {
            name: "test",
        };
    },
});
</script>

<template>
    <header class="flex flex-col">
        <h1 class="mt-2 text-2xl font-bold text-gray-600">Bhojan Shop</h1>
        <img alt="Vue logo" class="max-wd-96 logo" src="@/assets/logo.png" />
        <div class="flex flex-row w-full">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
            </nav>
        </div>
    </header>
    <div class="relative">
        <router-view></router-view>
    </div>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>

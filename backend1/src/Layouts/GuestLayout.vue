<!-- eslint-disable prettier/prettier -->
<template>
  <div :class="styleStore.initialState.darkMode">
    <div class="flex flex-col md:flex-row justify-center mx-auto rounded p-1 bg-slate-100">
      <nav
        class="w-full md:flex-none md:w-96 md:min-h-screen p-2 mb-2 rouned"
        v-bind:class="[styleStore.initialState.bgLeft, styleStore.initialState.textLeft]">
        <left-side> </left-side>
      </nav>
      <main
        class="w-full md:flex-1 rightSide overflow-auto p-2 mx-auto md:min-h-screen shadow-lg shadow-yellow-50 border border-3"
        :class="[styleStore.initialState.bgRight, styleStore.initialState.textRight]">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { useGuestStyleStore } from '@/stores/gutest-style-store'
import { defineComponent } from 'vue'
import LeftSide from '@/Components/LeftSide.vue'
import { RouterView } from 'vue-router'
export default defineComponent({
  setup() {
    const styleStore = useGuestStyleStore()
    return {
      // you can return the whole store instance to use it in the template
      styleStore,
    }
  },
  data() {
    return {
      // test: console.log(this.styleStore),
    }
  },
  components: {
    LeftSide,
    RouterView,
  },
})
</script>

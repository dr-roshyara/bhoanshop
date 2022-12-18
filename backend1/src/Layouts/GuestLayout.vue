<!-- eslint-disable prettier/prettier -->
<template>
  <div class="flex flex-col md:flex-row justify-center mx-auto rounded p-1 bg-slate-100">
    <navbar
      class="w-full md:flex-none md:w-96 md:min-h-screen p-2 mb-2 bg-slate-100 text-white rouned-sm"
      style="background-color: #121535">
      <!-- #39394d #050437 #020637  #121535-->
      <left-side> </left-side>
    </navbar>
    <main
      class="w-full md:flex-1 rightSide overflow-auto p-2 mx-auto md:min-h-screen shadow-lg bg-sky-50 border border-3 border-sky-100">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftSide from '@/Components/LeftSide.vue'
import { RouterView } from 'vue-router'
export default defineComponent({
  components: {
    LeftSide,
    RouterView,
  },
})
</script>

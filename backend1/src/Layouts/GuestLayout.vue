<!-- eslint-disable prettier/prettier -->
<template>
  <div class="flex flex-col md:flex-row justify-center items-center p-2 mx-auto rounded">
    <div class="w-full md:w-1/3 md:min-h-screen p-2 mb-2 bg-slate-50">
      <left-side> </left-side>
    </div>
    <div class="rightSide w-full p-2 mx-auto bg-emerald-50 md:min-h-screen shadow-lg">
      <slot></slot>
    </div>
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

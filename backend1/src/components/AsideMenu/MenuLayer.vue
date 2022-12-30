<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
// import appTheme from '@/assets/css/styles'
//  import { computed } from "vue";
const styleStore = useStyleStore()
</script>
<template>
  <aside
    class="px-1 pb-1 mb-1 inset-x-0 w-full rounded-sm bg-slate-200 dark:bg-slate-900 fixed flex z-40 top-0 min-h-screen transition-position overflow-hidden"
    :class="styleStore.mobileStyle.asideWidth">
    <div :class="styleStore.initialState.asideStyle" class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden">
      <div
        :class="styleStore.initialState.asideBrandStyle"
        class="flex flex-row h-14 items-center justify-between dark:bg-slate-500">
        <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <span class="font-bold text-xl">Menu</span>
        </div>
      </div>
      <div class="px-1 flex-1 overflow-y-auto overflow-x-hidden">
        <!-- add menu list    -->
        <MenuList />
        menu 1
      </div>
    </div>
  </aside>
</template>
<style scoped></style>

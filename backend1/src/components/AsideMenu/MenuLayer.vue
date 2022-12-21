<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
//  import { computed } from "vue";
const styleStore = useStyleStore()
</script>
<template>
  <aside
    id="aside"
    class="-mx-2 lg:p-2 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
    :class="styleStore.mobileStyle.asideWidth">
    <div :class="styleStore.initialState.asideStyle" class="lg:rounded-2xl flex-1 flex flex-col overflow-hidden">
      <div
        :class="styleStore.initialState.asideBrandStyle"
        class="flex flex-row h-14 items-center justify-between dark:bg-slate-900">
        <div class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0">
          <b class="font-black">Menu</b>
        </div>
        Button
        <!-- <button class="hidden lg:inline-block xl:hidden p-3">my button</button> -->
      </div>
      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        <!-- add menu list    -->
        <!-- <MenuList /> -->
      </div>
    </div>
  </aside>
</template>

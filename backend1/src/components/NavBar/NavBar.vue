<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import DropdownMenu from '@/Components/NavBar/DropdownMenu.vue'
import { appTheme } from '@/config'
// import ItemPlain from './ItemPlain.vue'
// import MenuList from './MenuList.vue'
import { ref, computed } from 'vue'
// import { containerMaxW } from '@/config'
import { useStyleStore } from '@/stores/styles'
const styleStore = useStyleStore()

const showIcon = () => {
  styleStore.setMobileAsideState()
  // console.log(styleStore.mobileStyle.showAside)
  // console.log(styleStore.mobileStyle.setAside)
}
const isMenuNavBarActive = ref(false)
const checkMobileAside = computed(() => {
  return styleStore.mobileStyle.showAside
})
</script>
<template>
  <nav
    :class="appTheme.bgNavbar"
    class="top-0 p-2 inset-x-0 flex flex-row justify-between fixed h-14 z-30 w-screen lg:w-full ease-in-out duration-300 dark:bg-slate-800 rounded-tl-md rounded-tr-md">
    <!-- Hamburger menu  -->
    <div
      class="relative flex items-stretch"
      :class="[checkMobileAside ? styleStore.mobileStyle.setAside : styleStore.mobileStyle.removeAside]">
      <button
        v-if="!styleStore.isMobileAsideOpen"
        @click="showIcon"
        class="grid col-auto items-center hover:bg-gray-600 w-14 px-2 rounded-lg border-none">
        <span class="block w-9 h-1 bg-gray-50 rounded border border-1 border-gray-100"></span>
        <span class="block w-9 h-1 bg-gray-50 rounded border border-1 border-gray-100"></span>
        <span class="block w-9 h-1 bg-gray-50 rounded border border-1 border-gray-100"></span>
        <span class="block w-9 h-1 bg-gray-50 rounded border border-1 border-gray-100"></span>
        <!-- <span class="block w-9 h-1 bg-gray-50 rounded-lg border border-1 bg-gray-100"></span> -->
      </button>
      <button v-if="styleStore.isMobileAsideOpen" @click="showIcon">
        <div
          class="flex flex-col text-center mx-auto justify-center items-center relative hover:bg-gray-600 rounded-md h-10 w-14">
          <span
            aria-hidden="true"
            class="block absolute h-1 w-10 bg-white border border-1 border-white transform transition ease-in-out duration-600 delay-150 ease-in-out"
            :class="{
              'rotate-45': styleStore.isMobileAsideOpen,
              ' -translate-y-1.5': !styleStore.isMobileAsideOpen,
            }"></span>
          <span
            aria-hidden="true"
            class="block absolute h-1 w-10 bg-white border border-1 border-white transform transition ease-in-out duration-600 delay-200 ease-in-out"
            :class="{
              '-rotate-45': styleStore.isMobileAsideOpen,
              ' translate-y-1.5': !styleStore.isMobileAsideOpen,
            }"></span>
        </div>
      </button>
    </div>
    <!-- icon menu to show the right side dropdown menu -->
    <dropdown-menu></dropdown-menu>
  </nav>
</template>

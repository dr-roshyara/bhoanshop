<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'
// import menuAside from '@/utils/Clickmenu/aside-menu'
// import menuNavbar from '@/utils/MenuList/navbar-menu'
import AsideMenu from '@/Components/AsideMenu/AsideMenu.vue'
// import ItemPlain from '@/Components/NavBar/ItemPlain.vue'
import NavBar from '@/Components/NavBar/NavBar.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
//
const styleStore = useStyleStore()
const router = useRouter()
const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)
//
router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})
const checkMobileAside = computed(() => {
  // console.log(styleStore.mobileStyle.showAside)
  return styleStore.mobileStyle.showAside
})
</script>
<template>
  <div
    class="min-h-screen w-full"
    :class="{
      dark: styleStore.initialState.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }">
    <div
      class="relative"
      :class="[checkMobileAside ? styleStore.mobileStyle.setAside : styleStore.mobileStyle.removeAside]">
      <!-- navbar first i.e. the top bar  -->
      <NavBar> </NavBar>
      <!-- aside menu  -->
      <aside-menu v-if="checkMobileAside"></aside-menu>

      <!-- Here comes the right side of the Dashboard slot -->
      <div class="mt-16">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

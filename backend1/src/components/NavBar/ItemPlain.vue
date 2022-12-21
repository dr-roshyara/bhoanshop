<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import { useStyleStore } from '@/stores/styles'

defineProps({
  display: {
    type: String,
    default: 'flex',
  },
  useMargin: Boolean,
})

const styleStore = useStyleStore()
</script>

<template>
  <div
    :class="[
      display,
      styleStore.initialState.navBarItemLabelStyle,
      styleStore.initialState.navBarItemLabelHoverStyle,
      useMargin ? 'my-2 mx-3' : 'py-2 px-3',
    ]"
    class="items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <slot />
  </div>
</template>

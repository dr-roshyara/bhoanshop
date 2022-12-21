<!-- eslint-disable prettier/prettier -->
<script setup lang="ts">
import ItemList from '@/Components/NavBar/ItemList.vue'

defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['menu-click'])
</script>
<template>
  <item-list></item-list>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isDropdownList: Boolean,
})
</script>
<template>
  <li>
    {{ item }}
    <!-- <component></component> -->
  </li>
</template>

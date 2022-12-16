<script lang="ts">
import { RouterView } from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    RouterView,
  },
  data() {
    return {
      name: 'test',
    }
  },
})
</script>

<template>
  <router-view></router-view>
</template>

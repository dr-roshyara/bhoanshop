<template>
  <guest-layout>
    <div class="flex flex-col items-center justify-center mt-2">
      <h1>This is an about page</h1>
    </div>
  </guest-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
export default defineComponent({
  setup() {},
  components: {
    GuestLayout,
  },
});
</script>

<style></style>

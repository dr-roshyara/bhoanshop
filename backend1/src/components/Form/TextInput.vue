<!-- eslint-disable prettier/prettier -->

<script setup lang="ts">
import { placeholder } from '@babel/types'
import { defineProps, defineEmits, defineExpose } from 'vue'
import { ref, onMounted } from 'vue'
const input = ref<HTMLInputElement | null>(null)
onMounted(() => {
  input.value?.focus()
})

defineProps<{
  modelValue: string
  labelName: string
  name: string
  type: string
}>()
/**
 * Reading links:
 * https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits
 * https://dev.to/caio2k/working-with-v-model-in-vue-3-3791
 *
 **/
const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void
}>()
</script>
<template>
  <div class="flex flex-col w-full px-2 md:px-3 mb-5">
    <label for="" class="font-semibold px-1 pb-1">{{ labelName }}</label>
    <div class="flex">
      <div class="w-10 z-10 text-center pointer-events-none flex items-center justify-center">
        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
      </div>
      <input
        class="w-full -ml-10 pl-10 px-2 py-4 rounded-lg border-2 border-stone-300 outline-none focus:border-indigo-500"
        :value="modelValue"
        :type="type"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
  </div>
</template>

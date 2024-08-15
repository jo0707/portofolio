<template>
  <div ref="card" class="rounded shadow-lg bg-white dark:bg-gray-900"
    :class="{ 'p-4': padded, 'rounded': rounded, 'shadow-lg': shadow, 'bg-opacity-50 backdrop-blur-lg': glass }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const card = ref<HTMLElement | null>(null)

const props = defineProps({
  rounded: {
    type: Boolean,
    default: true
  },
  shadow: {
    type: Boolean,
    default: true
  },
  padded: {
    type: Boolean,
    default: true
  },
  glass: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div>
    <div @click="isOpen = true"
      class="w-full h-full opacity-0 bg-black/70 hover:opacity-100 grid place-content-center transition" variant="ghost"
      label="Preview">
      <span class="text-sm text-gray-200">Preview</span>
    </div>

    <UModal v-model="isOpen">
      <div class="p-4 w-full">
        <img class="w-full object-contain" :src="image" />
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()

const isOpen = ref(false)
</script>

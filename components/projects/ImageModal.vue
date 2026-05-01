<template>
  <div>
    <div @click="isOpen = true"
      class="w-full h-full opacity-0 bg-black/70 hover:opacity-100 grid place-content-center transition" variant="ghost"
      label="Preview">
      <span class="text-sm text-gray-200">Preview</span>
    </div>

    <UModal v-model="isOpen">
      <div class="w-full flex flex-col gap-2 p-4 ">
        <img class="w-full object-contain rounded " :src="image" :alt="alt" loading="lazy" />
        <div class="grid grid-cols-2 gap-2">
          <UButton :disabled="!url" label="Demo" icon="i-heroicons-window-solid" :to="url" target="_blank"
            rel="noopener noreferrer" block variant="outline" />
          <UButton :disabled="!githubUrl" label="Github" icon="i-ri-github-fill" :to="githubUrl" target="_blank"
            rel="noopener noreferrer" block variant="outline" />
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string,
  alt: string,
  url: string | undefined
  githubUrl: string | undefined
}>()

const isOpen = ref(false)
</script>

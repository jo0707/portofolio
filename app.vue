<template>
  <NuxtLayout class="font-['Poppins'] scroll-smooth overflow-x-hidden">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})

onMounted(() => {
  if (window) {
    const lenis = new Lenis({
      autoRaf: true,
    });
  }
})
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 20, 0.15);
  border-radius: 12px;
}

::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 20, 0.1);
  border-radius: 12px;
}
</style>
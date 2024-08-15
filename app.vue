<template>
  <NuxtLayout class="font-['Poppins'] scroll-smooth overflow-x-hidden">
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})
</script>

<style>
/* make scrollbar smoothly rounded and gray */
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
<template>
  <ul class="flex gap-4 flex-col">
    <NuxtLink v-for="nav in navigations" :key="nav.name" :to="nav.link"
      class="w-4 h-4 rounded-full  transition border-2 border-primary duration-500"
      :class="hash == nav.link ? 'bg-primary' : ''">
    </NuxtLink>
  </ul>
</template>

<script lang="ts" setup>
import { navigations } from '~/data/navigations';

const hash = ref<string>('');
const route = useRoute()

onMounted(() => {
  watch(() => route.hash, (value) => {
    hash.value = value
  })
});
</script>
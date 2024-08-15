<template>
  <ul class="flex max-md:text-sm md:gap-4">
    <NuxtLink v-for="nav in navigations" :key="nav.name" :to="nav.link" class="relative group overflow-hidden px-2 sm:px-4 py-4">
      <div
        class="absolute top-0 left-0 w-full h-full translate-y-[101%] group-hover:translate-y-0 transition duration-300 ease-out bg-primary bg-opacity-20">
      </div>
      <span class="w-full h-full text-primary transition duration-300">{{ nav.name }}</span>
    </NuxtLink>
  </ul>
</template>

<script lang="ts" setup>
import { navigations } from '~/data/navigations';
</script>
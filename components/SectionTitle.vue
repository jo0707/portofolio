<template>
  <div class="w-fit">
    <h2 class="text-3xl lg:text-5xl font-bold text-primary">{{ title }}</h2>
    <SlidingBar class="w-full h-[3px]" :duration="2000" :delay="0" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<style></style>
<template>
  <Card class="flex gap-4 z-50 max-lg:p-1">
    <div v-for="social in socials">
      <UButton size="sm" :key="social.name" :to="social.link" target="_blank" variant="ghost" :name="social.name"
        :aria-label="social.name">
        <UIcon :name="social.icon" class="w-4 h-4"></UIcon>
      </UButton>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { socials } from '~/data/socials';
</script>
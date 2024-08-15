<template>
  <UPopover mode="hover">
    <UButton size="xs" color="primary" label="Stack" variant="soft" />

    <template #panel>
      <Card class="p-4">
        <ul class="flex flex-wrap gap-2">
          <li v-for="tech in project.technologies" :key="tech" class="text-xs bg-primary text-white rounded px-2 py-1">
            {{ tech }}
          </li>
        </ul>
      </Card>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/projects';
import Card from '../Card.vue';

const props = defineProps<{
  project: Project
}>()
</script>

<style></style>
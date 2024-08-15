<template>
  <Card class="hover:scale-105 transition duration-300 dark:bg-gray-950 h-[22rem] overflow-hidden group border border-gray-200 dark:border-gray-800"
    :padded="false">
    <div class="flex flex-col text-start h-full group">
      <div class="relative h-36 group cursor-pointer">
        <img :src="getImageFilename(project.image)" :alt="project.name" class="w-full h-full object-cover object-center"
          loading="lazy">
        <ProjectsImageModal :image="getImageFilename(project.image)" class="absolute w-full h-full top-0 left-0" />
      </div>

      <div class="p-3 flex flex-col gap-2 grow group">
        <div class="flex flex-col w-fit group">
          <h3 class="font-bold text-primary w-fit">{{ project.name }}</h3>
          <div class="w-full h-[2px] bg-transparent overflow-hidden">
            <div class="h-full bg-primary -translate-x-full duration-500 ease-out group-hover:translate-x-0">
            </div>
          </div>
        </div>
        <p class="text-sm self-stretch flex-1 line-clamp-4">{{ project.description }}</p>

        <div class="flex gap-2">
          <TechPopover class="w-fit self-end" :project="project" />
          <div class="grow"></div>
          <UButton size="xs" variant="soft" icon="i-ri-github-fill" :to="project.githubUrl" target="_blank"
            :disabled="!project.githubUrl">
          </UButton>
          <UButton size="xs" variant="soft" icon="i-heroicons-window-solid" :to="project.url" target="_blank"
            :disabled="!project.url">
          </UButton>
        </div>
      </div>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import type { Project } from '~/types/projects';
import TechPopover from './TechPopover.vue';

const props = defineProps<{
  project: Project
}>()

function getImageFilename(image: string) {
  return `/img/projects/${image}${image.includes('.') ? '' : '.webp'}`;
}
</script>

<style></style>
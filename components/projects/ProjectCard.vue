<template>
  <Card
    class="md:hover:scale-105 transition duration-300 dark:bg-gray-950 h-72 lg:h-[22rem] overflow-hidden md:group border border-gray-200 dark:border-gray-800"
    :padded="false">
    <div class="flex flex-col text-start h-full group">
      <div class="relative h-36 group cursor-pointer">
        <img :src="getImageFilename(project.image)" :alt="project.name" class="w-full h-full object-cover object-center"
          loading="lazy" />
        <ProjectsImageModal :githubUrl="project.githubUrl" :url="projectUrl" :image="getImageFilename(project.image)"
          :alt="`${project.name} project screenshot`" class="absolute w-full h-full top-0 left-0" />
      </div>

      <div class="p-3 flex flex-col gap-2 grow group">
        <div class="flex flex-col w-fit group">
          <NuxtLink v-if="projectUrl" class="font-bold text-primary w-fit line-clamp-1 overflow-ellipsis"
            :to="projectUrl" target="_blank" rel="noopener noreferrer">{{ project.name }}</NuxtLink>
          <span v-else class="font-bold text-primary w-fit line-clamp-1 overflow-ellipsis">{{ project.name }}</span>
          <div class="w-full h-[2px] bg-transparent overflow-hidden">
            <div class="h-full bg-primary -translate-x-full duration-500 ease-out group-hover:translate-x-0">
            </div>
          </div>
        </div>
        <p class="text-xs lg:text-sm self-stretch flex-1 line-clamp-4">{{ project.description }}</p>

        <div class="flex gap-2">
          <TechPopover class="w-fit self-end" :project="project" />
          <div class="grow"></div>
          <UButton size="xs" variant="soft" icon="i-heroicons-window-solid" :to="projectUrl" target="_blank"
            rel="noopener noreferrer" label="App" :disabled="!projectUrl" :name="`${project.name}-demo`"
            :aria-label="`${project.name} demo`">
          </UButton>
          <UButton size="xs" variant="soft" icon="i-ri-github-fill" :to="project.githubUrl" target="_blank"
            rel="noopener noreferrer" :disabled="!project.githubUrl" :name="`${project.name}-github`"
            :aria-label="`${project.name} GitHub repository`">
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

const projectUrl = computed(() => normalizeExternalUrl(props.project.url))

function normalizeExternalUrl(url?: string) {
  if (!url) return undefined

  return /^https?:\/\//.test(url) ? url : `https://${url}`
}

function getImageFilename(image: string) {
  return `/img/projects/${image}${image.includes('.') ? '' : '.webp'}`;
}
</script>

<style></style>
<template>
  <div>
    <ul class="flex max-w-6xl place-content-center place-items-center flex-wrap">
      <li class="w-full sm:basis-1/3 p-2 lg:p-4 min-w-64" v-for="project in projects" :key="project.name">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { projects } from '~/data/projects';
import ProjectCard from './ProjectCard.vue';


</script>
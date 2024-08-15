<template>
  <div>
    <ul class="flex max-w-6xl flex-wrap">
      <li class="basis-1/3 p-4" v-for="project in projects" :key="project.name">
        <ProjectCard :project="project" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { projects } from '~/data/projects';
import ProjectCard from './ProjectCard.vue';


</script>
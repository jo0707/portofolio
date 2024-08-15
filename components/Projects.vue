<template>
    <div class="min-h-screen grid place-content-center pt-16">
        <div ref="target" class="flex flex-col place-content-center text-center max-w-4xl gap-6">
            <SectionTitle title="Projects" class="mx-auto" />
            <p class="max-lg:text-sm">A look at projects I've created or collaborated on with my team</p>

            <ProjectList />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectList from './projects/ProjectList.vue';

const target = ref<HTMLElement | null>(null)
</script>
<template>
    <div class="min-h-screen grid place-content-center pt-16">
        <div ref="target" class="flex flex-col place-content-center text-center max-w-4xl gap-6">
            <div class="mx-auto w-fit">
                <h2 class="text-5xl font-bold text-primary">Projects</h2>
                <SlidingBar class="w-full h-[3px]" :duration="2000" :delay="0" />
            </div>

            <p>A look at projects I've created or collaborated on with my team</p>

            <ProjectList />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProjectList from './projects/ProjectList.vue';

const target = ref<HTMLElement | null>(null)


</script>
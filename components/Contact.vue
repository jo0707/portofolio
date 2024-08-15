<template>
    <div class="min-h-screen grid place-content-center max-lg:px-8">
        <div ref="target" class="flex flex-col place-content-center text-justify max-w-4xl gap-2">
            <SectionTitle title="Get In Touch" />
            <div>
                <p class="max-lg:text-sm">
                    I'm always open to discussing product design work or partnership opportunities. If you have any
                    questions or just want to say hi, feel free to drop me a message!
                </p>
                <p>

                </p>

                <ul class="grid max-md:grid-rows-4 md:grid-cols-4 gap-4 mt-8">
                    <li v-for="social in socials" :key="social.name" class="w-full">
                        <NuxtLink :to="social.link" :color="social.color"
                            class="capitalize group w-full relative flex place-content-center place-items-center group gap-2 px-5 py-3 overflow-hidden rounded"
                            :class="`text-${social.color}-500`" target="_blank">
                            <UIcon :name="social.icon" class="w-6 h-6" />
                            <span>{{ social.name }}</span>
                            <div class="absolute top-0 left-0 w-full h-full translate-y-[101%] group-hover:translate-y-0 transition duration-300 ease-out"
                                :class="`bg-${social.color}${social.color !== 'black' ? '-500' : ''} bg-opacity-20`">
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- contact button color safelisting -->
        <div class="hidden bg-black"></div>
    </div>
</template>

<script setup lang="ts">
import { socials } from '~/data/socials';

const target = ref<HTMLElement | null>(null)
</script>
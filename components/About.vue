<template>
    <div class="min-h-screen grid place-content-center">
        <div ref="target" class="flex flex-col place-content-center text-justify max-w-3xl gap-6">
            <div class="w-fit mb-8">
                <h2 class="text-5xl font-bold text-primary text-start">About Me</h2>
                <SlidingBar class="w-full h-[3px]" :duration="2000" :delay="1000" />
            </div>

            <!-- TODO: Tech Stack -->

            <p>
                I am Joshua Palti Sinaga, an Informatics Engineering student.
            </p>
            <p>
                I love solving problems around me, turning challenges into opportunities for innovation. I focus on
                creating applications that blend functionality with intuitive design, ensuring a seamless user
                experience.
            </p>
            <p>
                Began my focus in programming at 16 years old, I had the honor of participating in and winning 1st place
                at the LKS North Sumatera competition 🏆.
            </p>
            <p>
                Currently, I am studying Informatics Engineering at the Sumatra Institute of Technology (ITERA).
            </p>

            <div class="flex flex-col gap-2">
                <h3 class="text-primary font-semibold">Tech Stacks</h3>
                <ul class="flex gap-2">
                    <li v-for="skill in skills" :key="skill.icon">
                        <UPopover mode="hover" strategy="absolute">
                            <UIcon :name="skill.icon" class="w-8 h-8" />

                            <template #panel>
                                <Card>
                                    <p class="text-sm text-primary">{{ skill.name }}</p>
                                    <UButton variant="link" size="xs" color="white" :padded="false" :to="skill.link">{{ skill.link }}
                                    </UButton>
                                </Card>
                            </template>
                        </UPopover>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const target = ref<HTMLElement | null>(null)

const skills = [
    { icon: 'i-skill-icons-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { icon: 'i-skill-icons-golang', name: 'Golang', link: 'https://golang.org/' },
    { icon: 'i-skill-icons-python-light', name: 'Python', link: 'https://www.python.org/' },
    { icon: 'i-skill-icons-nuxtjs-light', name: 'Nuxt.js', link: 'https://nuxtjs.org/' },
    { icon: 'i-skill-icons-mongodb', name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { icon: 'i-vscode-icons-file-type-capacitor', name: 'Capacitor', link: 'https://capacitorjs.com/' },
];
</script>
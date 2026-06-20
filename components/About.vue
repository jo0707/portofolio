<template>
    <div class="min-h-screen grid place-content-center max-lg:px-8">
        <div ref="target" class="flex flex-col place-content-center text-justify max-w-3xl gap-6">
            <SectionTitle title="About" />

            <p>
                I'm <strong>Joshua Palti Sinaga</strong>, an Informatics Engineering student at 
                <strong>Sumatra Institute of Technology (ITERA)</strong> and a 
                <strong>full-stack web & mobile developer</strong> from Indonesia.
            </p>
            <p>
                I love solving problems around me, turning challenges into opportunities for innovation. I focus on
                creating applications that blend functionality with intuitive design, ensuring a seamless user
                experience. As a <strong>Nuxt.js and Next.js developer</strong>, I build performant web applications,
                while also developing <strong>cross-platform mobile apps</strong> using technologies like Capacitor and Flutter.
            </p>
            <p>
                Beyond full-stack development, I'm passionate about exploring <strong>AI and IoT projects</strong>,
                integrating cutting-edge technologies to build innovative solutions. I work with 
                <strong>TypeScript, Golang, Python, MongoDB, PocketBase, and Firebase</strong> to create
                end-to-end applications that make a real impact.
            </p>
            <p>
                Began my focus in programming at 16 years old, I had the honor of participating in and winning 1st place
                at the <strong>LKS North Sumatera competition</strong> 🏆 — a provincial-level vocational skills competition.
            </p>
            <p class="max-lg:hidden">
                Currently, I am studying Informatics Engineering at the Sumatra Institute of Technology (ITERA), 
                where I continuously expand my knowledge in software engineering, database design, and emerging technologies.
            </p>

            <div class="flex flex-col gap-2">
                <h3 class="text-primary font-semibold">Tech Stacks</h3>
                <p class="text-sm opacity-80 max-lg:hidden">
                  TypeScript, Golang, Python, Nuxt.js, Next.js, MongoDB, Capacitor, PocketBase
                </p>
                <ul ref="skillList" class="flex flex-wrap gap-2" aria-label="Tech stacks: TypeScript, Golang, Python, Nuxt.js, Next.js, MongoDB, Capacitor, PocketBase">
                    <li :id="`skills${i}`" v-for="skill, i in skills" :key="skill.icon" class="opacity-0">
                        <UPopover mode="hover" strategy="absolute">
                            <UButton :padded="false" class="rounded overflow-hidden" variant="ghost"
                                :aria-label="skill.name" :name="skill.name">
                                <UIcon :name="skill.icon" class="w-8 h-8" />
                            </UButton>

                            <template #panel>
                                <Card>
                                    <p class="text-sm text-primary">{{ skill.name }}</p>
                                    <UButton variant="link" size="xs" color="white" :padded="false" :to="skill.link">{{
                                        skill.link }}
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
const skillList = ref<HTMLElement | null>(null)
const isSkillVisible = useElementVisibility(skillList)

const skills = [
    { icon: 'i-skill-icons-typescript', name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { icon: 'i-skill-icons-golang', name: 'Golang', link: 'https://golang.org/' },
    { icon: 'i-skill-icons-python-light', name: 'Python', link: 'https://www.python.org/' },
    { icon: 'i-skill-icons-nuxtjs-light', name: 'Nuxt.js', link: 'https://nuxtjs.org/' },
    { icon: 'i-skill-icons-nextjs-light', name: 'Next.js', link: 'https://nextjs.org/' },
    { icon: 'i-skill-icons-mongodb', name: 'MongoDB', link: 'https://www.mongodb.com/' },
    { icon: 'i-vscode-icons-file-type-capacitor', name: 'Capacitor', link: 'https://capacitorjs.com/' },
    { icon: 'i-simple-icons-pocketbase', name: 'PocketBase', link: 'https://pocketbase.io/' },
];

function animateSkills() {
    skills.forEach((_, i) => {
        useAnime({
            targets: `#skills${i}`,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 1500,
            delay: (200 * i) + 400,
            easing: 'easeOutExpo',
        })
    })
}

onMounted(() => {
    watchOnce(isSkillVisible, (isVisible) => {
        if (isVisible) {
            animateSkills()
        }
    })
})
</script>
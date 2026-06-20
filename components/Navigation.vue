<template>
  <div class="flex max-md:text-sm md:gap-4">
    <NuxtLink v-for="nav in navigations" :key="nav.name" :to="nav.link"
      :target="nav.external ? '_blank' : undefined" :rel="nav.external ? 'noopener noreferrer' : undefined"
      class="relative group overflow-hidden px-2 sm:px-4 py-4">
      <div
        class="absolute top-0 left-0 w-full h-full translate-y-[101%] group-hover:translate-y-0 transition duration-300 ease-out bg-primary bg-opacity-20">
      </div>
      <span class="w-full h-full text-primary transition duration-300 font-medium">{{ nav.name }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { baseDomain } = useSiteUrl()

const navigations = [
  {
    name: "Jo",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Blog",
    link: `https://blog.${baseDomain.value}/`,
    external: true,
  },
]

</script>
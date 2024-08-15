<template>
  <ul class="flex gap-4 p-4">
    <li v-for="nav in navigations">
      <UButton size="sm" :key="nav.name" :to="nav.link" :label="nav.name" variant="ghost" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
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
    link: "#contact"
  }
]

</script>

<style></style>
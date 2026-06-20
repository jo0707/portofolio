<template>
  <div class="min-h-screen flex flex-col place-content-center place-items-center text-center px-4 gap-6">
    <h1 class="text-6xl lg:text-8xl font-bold text-primary">404</h1>
    <h2 class="text-xl lg:text-2xl font-semibold">Page Not Found</h2>
    <p class="max-w-md text-sm lg:text-base opacity-80">
      The page you're looking for doesn't exist or has been moved.
      Let's get you back on track.
    </p>
    <UButton to="/" color="primary" variant="solid" size="lg" icon="i-heroicons-arrow-left">
      Back to Home
    </UButton>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: '404 — Page Not Found | Joshua Palti Sinaga',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex',
})
</script>

<style scoped></style>

<template>
  <div class="h-screen w-screen flex flex-col place-content-center place-items-center text-center px-4">
    <img id="profile" src="/img/profile.webp" alt="profile" class="w-28 h-28 sm:w-40 sm:h-40 rounded-full" />

    <Hello id="hello" class="mt-12 py-2" />
    <SlidingBar class="w-40 sm:w-64 h-[3px]" :duration="2000" :delay="1500" />

    <h3 id="greet1" class="mt-6 text-xl lg:text-2xl">I am Joshua Sinaga</h3>
    <h4 id="greet2" class="mt-1 max-lg:text-sm">
      A software developer that focuses on web and android platforms</h4>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  useAnime({
    targets: '#profile',
    translateY: [-60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 1200
  })

  useAnime({
    targets: '#hello',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: 2000
  })

  useAnime({
    targets: '#greet1',
    opacity: [0, 1],
    translateY: [60, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 2400
  })

  useAnime({
    targets: '#greet2',
    opacity: [0, 1],
    translateY: [60, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 2700
  })
})
</script>
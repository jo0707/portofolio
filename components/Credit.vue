<template>
  <div class="text-xs w-screen flex flex-col place-content-center place-items-center p-4 max-lg:pb-16 overflow-hidden">
    <UDivider id="creditline" class="w-4/5" icon="i-skill-icons-nuxtjs-dark" />
    <p id="creditlib" class="text-green-500 opacity-75 text-[11px] font-light"><span>
      </span> Built with Nuxt 3, Nuxt UI, and Anime.js</p>
    <p id="creditauthor" class="text-[10px] opacity-50 text-primary">With 🧠 & ❤️ by Jo © {{ new Date().getFullYear() }}
    </p>
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  let creditline = document.getElementById('creditline')
  let creditAnimations = [useAnime({
    autoplay: false,
    targets: '#creditline',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 0
  }),
  useAnime({
    autoplay: false,
    targets: '#creditlib',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 300
  }),
  useAnime({
    autoplay: false,
    targets: '#creditauthor',
    translateY: [60, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 2000,
    delay: 600
  })]

  function playAnimation() {
    creditAnimations.forEach((animation) => {
      animation.play()
    })
  }

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playAnimation()
      }
    })
  }, {
    threshold: 0.01
  })

  observer.observe(creditline!)
})
</script>

<style></style>
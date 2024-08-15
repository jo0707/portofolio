<template>
  <div class="h-screen w-screen flex flex-col place-content-center place-items-center text-center px-4">
    <div ref="avatarContainer" id="avatarContainer"
      class="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden">
      <img v-if="isAvatar" src="/img/profile.webp" alt="profile"
        class="absolute top-0 left-0 w-full h-full object-cover" />
      <img v-else src="/img/logo.webp" alt="logo" class="absolute top-0 left-0 w-full h-full object-cover" />
      <div ref="avatarOverlay" id="avatarOverlay" class="w-[102%] h-full -translate-x-[101%] bg-primary-500"></div>
    </div>

    <Hello id="hello" class="mt-12 py-2" />
    <SlidingBar class="w-40 sm:w-64 h-[3px]" :duration="2000" :delay="1500" />

    <h2 id="greet1" class="mt-6 text-xl lg:text-2xl">I am Joshua Sinaga</h2>
    <h3 id="greet2" class="mt-1 max-lg:text-sm">
      A software developer that focuses on web and mobile platforms</h3>
  </div>
</template>


<script lang="ts" setup>
const isAvatar = ref(true)
const avatarOverlay = ref<HTMLElement | null>(null)

onMounted(() => {
  useAnime({
    targets: '#avatarContainer',
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

  let overlayAnimation = useAnime({
    targets: '#avatarOverlay',
    loop: true,
    translateX: ['-101%', '101%'],
    easing: 'easeInOutExpo',
    duration: 3000,
    delay: 5000
  })

  if (avatarOverlay.value) {
    let changed = false
    let overlayWidth = avatarOverlay.value?.getBoundingClientRect().width
    let centerStart = (window.innerWidth / 2) - (overlayWidth! / 2)
    overlayAnimation.update = () => {
      let overlayX = avatarOverlay.value!.getBoundingClientRect().left
      if (overlayX >= centerStart && !changed) {
        isAvatar.value = !isAvatar.value
        changed = true
      } else if (overlayX < centerStart && changed) {
        changed = false
      }
    }
  }
})
</script>
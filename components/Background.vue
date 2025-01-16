<template>
  <div class="fixed top-0 left-0 h-screen w-screen bg-gray-300 dark:bg-gray-700">
    <div ref="slideup" id="slideup" class="bg-white dark:bg-gray-900 h-screen w-screen opacity-0">
    </div>
  </div>
</template>

<script lang="ts" setup>
const slideup = ref<HTMLElement | null>(null)

onMounted(() => {
  const animation = useAnime({
    targets: '#slideup',
    easing: 'easeInOutExpo',
    translateY: {
      value: [100, 0],
      duration: 1000
    },
    opacity: {
      value: [0, 1],
      duration: 1000
    }
  })

  animation.changeComplete = () => {
    slideup.value?.classList.add('transition')
  }
})
</script>

<template>
  <div class="overflow-hidden">
    <div ref="bar" class="w-full h-full -translate-x-full bg-primary"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'right'
  },
  duration: {
    type: Number,
    default: 1000
  },
  delay: {
    type: Number,
    default: 0
  }
})
const bar = ref<HTMLElement | null>(null)
const isBarVisible = useElementVisibility(bar)

onMounted(() => {
  watchOnce(isBarVisible, (isVisible) => {
    if (isVisible) {
      useAnime({
        targets: bar.value!,
        translateX: props.direction === 'left' ? ['100%', 0] : props.direction === 'right' ? ['-100%', 0] : [0, 0],
        translateY: props.direction === 'up' ? ['100%', 0] : props.direction === 'down' ? ['-100%', 0] : [0, 0],
        easing: 'easeOutExpo',
        duration: props.duration,
        delay: props.delay
      })
    }
  })
})
</script>
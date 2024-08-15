<template>
  <div class="fixed top-0 left-0 h-screen w-screen bg-gray-300 dark:bg-gray-700">
    <div ref="slideup" id="slideup" class="bg-white dark:bg-gray-900 h-screen w-screen opacity-0"></div>

    <!-- circles -->
    <!-- <div>
      <div v-for="(item, i) in items" :style="{ top: item.y, left: item.x }"
        class="absolute w-4 h-4 rounded-full border-primary border-2 floating opacity-50" :id="`item${i}`"></div>
    </div> -->

  </div>
</template>

<script lang="ts" setup>
import anime from 'animejs';

// create matrix of items {x,y,type: \in {circle, line}} with positions as grid
// const items = Array.from({ length: 100 }, (_, i) => ({
//   x: `${i % 10 * 10}%`,
//   y: `${Math.floor(i / 10) * 10}%`,
//   type: i % 2 === 0 ? 'circle' : 'line'
// })
// );

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

  // circles.forEach((circle, i) => {
  //   useAnime({
  //     targets: `#circle${i}`,
  //     easing: 'easeInOutExpo',
  //     translateY: {
  //       value: [100, 0],
  //       duration: 2000,
  //       delay: 3000
  //     },
  //     opacity: {
  //       value: [0, 1],
  //       duration: 2000,
  //       delay: 3000
  //     },
  //   })

  //   // create floating animation with random values
  //   useAnime({
  //     targets: `#circle${i}`,
  //     direction: 'alternate',
  //     easing: 'easeInOutSine',
  //     translateY: {
  //       value: [0, anime.random(-10, 10)],
  //       duration: 6000,
  //     },
  //     translateX: {
  //       value: [0, anime.random(-10, 10)],
  //       duration: 6000,
  //     },
  //     loop: true
  //   })
  // })
})
</script>

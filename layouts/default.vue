<template>
  <div>
    <Background class="-z-10" />

    <header ref="header" id="navbar"
      class="fixed top-0 left-0 w-screen flex place-content-center z-50 bg-white dark:bg-gray-900 -translate-y-96">
      <div class="grow"></div>
      <Navigation id="navigation" class="w-fit" />
      <div class="grow"></div>
    </header>

    <main>
      <slot />
    </main>

    <!-- <section class="fixed top-1/2 right-4 z-50 -translate-y-1/2">
      <SideNavigation class="place-content-center" />
    </section> -->

    <footer>
      <div id="fixedFooter"
        class="fixed w-full bottom-0 left-0 flex max-md:place-content-center md:justify-between p-4 translate-y-96">
        <FooterSocialMedia class="max-md:hidden" />
        <FooterThemeSelector class="max-md:w-full" />
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const header = ref<HTMLElement | null>(null)

onMounted(() => {
  let headerAnimation = useAnime({
    targets: '#navbar',
    translateY: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: 3000
  })

  useAnime({
    targets: '#fixedFooter',
    translateY: [100, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: 800
  })

  headerAnimation.complete = () => {
    header.value?.classList.add('transition')
  }
})
</script>

<style></style>
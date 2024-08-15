<template>
  <div class="text-primary font-['Roboto_Mono'] font-bold text-4xl lg:text-5xl overflow-hidden">
    <Transition mode="out-in" appear>
      <h1 v-if="currentIndex % 2 == 0">{{
        texts[currentIndex].text }}</h1>
      <h1 v-else-if="currentIndex % 2 == 1">{{
        texts[currentIndex].text }}</h1>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const texts = [
  {
    text: 'Hello!',
    lang: 'en'
  },
  {
    text: 'Ciao!',
    lang: 'it'
  },
  {
    text: 'こんにちは!',
    lang: 'jp'
  },
  {
    text: "Привіт!",
    lang: 'ru'
  },
  {
    text: '你好!',
    lang: 'cn'
  },
  {
    text: '안녕하세요!',
    lang: 'kr'
  },
  {
    text: 'Olá!',
    lang: 'pt'
  },
  {
    text: 'नमस्ते!',
    lang: 'in'
  }
]

const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = currentIndex.value === texts.length - 1 ? 0 : currentIndex.value + 1
  }, 3000)
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all .8s cubic-bezier(0.65, 0, 0.35, 1);

}

.v-enter-from {
  opacity: 0;
  transform: translateY(60px);
}


.v-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
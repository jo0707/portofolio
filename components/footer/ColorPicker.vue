<template>
  <UPopover mode="hover" :popper="{ strategy: 'fixed' }" class="w-fit">
    <template #default="{ open }">
      <UButton color="gray" variant="ghost" square :class="[open && 'bg-gray-50 dark:bg-gray-800']"
        aria-label="Color picker">
        <UIcon name="i-heroicons-swatch-20-solid" class="w-5 h-5 text-primary-500 dark:text-primary-400" />
      </UButton>
    </template>

    <template #panel>
      <div class="p-2">
        <div class="grid grid-cols-5">
          <UButton v-for="color in primaryColors" :key="color.value" variant="ghost" :selected="primary"
            @click="primary = color">
            <div class="rounded-full w-4 h-4" :class="`bg-${color.value}-500 dark:bg-${color.value}-400`"></div>
          </UButton>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
// @ts-nocheck
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()
const availableColors = [
  "amber",
  "green",
  "sky",
  "blue",
  "rose",
  "primary"
]

const primaryColors = computed(() => availableColors.filter(color => color !== 'primary').map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
const primary = computed({
  get() {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set(option) {
    appConfig.ui.primary = option.value
    window.localStorage.setItem('theme-primary', appConfig.ui.primary)
  }
})

const grayColors = computed(() => ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })))
const gray = computed({
  get() {
    return grayColors.value.find(option => option.value === appConfig.ui.gray)
  },
  set(option) {
    appConfig.ui.gray = option.value

    window.localStorage.setItem('theme-gray', appConfig.ui.gray)
  }
})
</script>
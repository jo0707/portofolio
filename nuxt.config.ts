export default defineNuxtConfig({
    modules: ["@hypernym/nuxt-anime", "@vueuse/nuxt", "@nuxt/ui", "@nuxt/fonts"],

    anime: {
        composables: true,
        autoImport: true,
    },

    colorMode: {
        preference: "light",
    },

    ui: {
        global: true,
        safelistColors: ["amber", "green", "sky", "blue", "rose"],
    },

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    devServer: { host: "127.0.0.1", port: 3000 },
})

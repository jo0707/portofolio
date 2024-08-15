export default defineNuxtConfig({
    modules: ["@hypernym/nuxt-anime", "@vueuse/nuxt", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/seo"],

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

    site: {
        url: "https://jooo.site",
        name: "Joshua Sinaga's Portofolio",
        description:
            "Joshua Palti Sinaga is a web and mobile developer and currently an informatics engineering student. Love to learn new things and solving problems around me.",
        defaultLocale: "en",
    },

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    devServer: { host: "127.0.0.1", port: 3000 },
})

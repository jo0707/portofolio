export default defineNuxtConfig({
  modules: ["@hypernym/nuxt-anime", "@vueuse/nuxt", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/seo", "nuxt-gtag"],

  anime: {
      composables: true,
      autoImport: true,
  },

  colorMode: {
      preference: "light",
  },

  ui: {
      safelistColors: ["amber", "green", "sky", "blue", "rose"],
  },

  site: {
      url: "https://itsjo.works/",
      name: "Joshua Palti Sinaga's Portfolio",
      description:
          "Joshua Palti Sinaga is a web and mobile developer and informatics engineering student who loves learning new things and solving problems.",
      defaultLocale: "en",
  },

  gtag: {
      enabled: process.env.NODE_ENV === "production",
      id: "G-VJPTRRC2EF",
  },

  devtools: { enabled: false },
  devServer: { host: "127.0.0.1", port: 3000 },
  compatibilityDate: "2025-02-09",
})
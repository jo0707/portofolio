<template>
  <div>
    <Hero />
    <About id="about" />
    <Projects id="projects" />
    <Contact id="contact" />
    <Credit id="credit" />
  </div>
</template>

<script lang="ts" setup>
const title = 'Joshua Palti Sinaga — Web & Mobile Developer'
const description = 'Portfolio of Joshua Palti Sinaga, a web and mobile developer focused on Nuxt, Next.js, TypeScript, AI, IoT, and mobile projects.'
const siteUrl = 'https://itsjo.works/'
const ogImage = `${siteUrl}og-image.png`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: siteUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Joshua Palti Sinaga',
        url: siteUrl,
        image: `${siteUrl}img/profile_1024.webp`,
        jobTitle: 'Web and Mobile Developer',
        description,
        sameAs: [
          'https://github.com/jo0707',
          'https://www.linkedin.com/in/joshuapaltisinaga/',
          'https://instagram.com/jo907__',
        ],
        knowsAbout: ['Nuxt', 'Next.js', 'TypeScript', 'Vue.js', 'Mobile Development', 'AI', 'IoT'],
      }),
    },
  ],
})
</script>

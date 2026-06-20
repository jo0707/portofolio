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
import { projects } from '~/data/projects'

const title = 'Joshua Palti Sinaga — Web & Mobile Developer'
const description = 'Portfolio of Joshua Palti Sinaga, a web and mobile developer focused on Nuxt, Next.js, TypeScript, AI, IoT, and mobile projects.'
const { siteUrl } = useSiteUrl()
const ogImage = `${siteUrl}og-image.webp`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: siteUrl,
  ogImage,
  ogLocale: 'en_US',
  ogSiteName: siteUrl,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
  meta: [
    { name: 'theme-color', content: '#0284c7' },
    { name: 'application-name', content: "Joshua Palti Sinaga's Portfolio" },
  ],
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
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: "Joshua Palti Sinaga's Projects",
        description: 'A collection of web, mobile, and embedded projects created by Joshua Palti Sinaga.',
        url: siteUrl,
        numberOfItems: projects.length,
        itemListElement: projects.filter(p => p.url).map((project, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'SoftwareApplication',
            name: project.name,
            description: project.description,
            url: project.url.startsWith('http') ? project.url : `https://${project.url}`,
            applicationCategory: project.technologies.includes('Android') || project.technologies.includes('Flutter')
              ? 'MobileApplication'
              : 'WebApplication',
          },
        })),
      }),
    },
  ],
})
</script>

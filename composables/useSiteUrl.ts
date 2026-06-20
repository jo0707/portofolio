export const useSiteUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl

  // Normalize: ensure trailing slash
  const normalized = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`

  // Extract base domain (e.g., "itsjo.works" from "https://itsjo.works/")
  const baseDomain = computed(() => {
    try {
      const url = new URL(normalized)
      return url.hostname
    } catch {
      return 'itsjo.works'
    }
  })

  return {
    siteUrl: normalized,
    baseDomain,
  }
}

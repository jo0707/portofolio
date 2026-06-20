export const useSiteUrl = () => {
  const runtimeConfig = useRuntimeConfig()
  const siteUrl = runtimeConfig.public.siteUrl

  // Normalize: ensure trailing slash
  const normalized = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`

  // Extract base domain (e.g., "itsjo.dev" from "https://itsjo.dev/")
  const baseDomain = computed(() => {
    try {
      const url = new URL(normalized)
      return url.hostname
    } catch {
      return 'itsjo.dev'
    }
  })

  return {
    siteUrl: normalized,
    baseDomain,
  }
}

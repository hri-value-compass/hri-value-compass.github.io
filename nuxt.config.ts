// https://nuxt.com/docs/api/configuration/nuxt-config
import { concernTopicRoutes } from './utils/concernsAndValues'
import { defaultDescription, siteName } from './utils/seo'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  typescript: { typeCheck: false },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      meta: [
        { name: 'application-name', content: siteName },
        { name: 'theme-color', content: '#f3f4f6' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: defaultDescription },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: siteName },
        { name: 'twitter:description', content: defaultDescription },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/',
        '/form/context',
        '/table',
        '/robots.txt',
        '/sitemap.xml',
        '/llms.txt',
        ...concernTopicRoutes,
      ],
    },
  },
})

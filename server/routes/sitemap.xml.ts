import { concernTopicRoutes } from '~/utils/concernsAndValues'
import { absoluteUrl } from '~/utils/seo'

const staticRoutes = [
  '/',
  '/form/context',
  '/table',
]

const routes = [...staticRoutes, ...concernTopicRoutes]

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => [
      '  <url>',
      '    <loc>' + escapeXml(absoluteUrl(route)) + '</loc>',
      '  </url>',
    ].join('\n')),
    '</urlset>',
  ].join('\n')
})

import { absoluteUrl } from '~/utils/seo'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=UTF-8')

  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /form/results',
    '',
    'Sitemap: ' + absoluteUrl('/sitemap.xml'),
  ].join('\n')
})

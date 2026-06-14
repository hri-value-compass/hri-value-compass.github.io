import { concernValues } from '~/utils/concernsAndValues'
import { absoluteUrl, defaultDescription, paperUrl, siteName, zenodoToolUrl } from '~/utils/seo'

export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain; charset=UTF-8')

  const topicLinks = concernValues.flatMap((value) =>
    value.topics.map((topic) =>
      '- ' + value.title + ' / ' + topic.title + ': ' + absoluteUrl('/' + value.slug + '/' + topic.slug),
    ),
  )

  return [
    '# ' + siteName,
    '',
    '> ' + defaultDescription,
    '',
    'The HRI Value Compass is a research-backed web tool for identifying values and ethical concerns in human-robot interaction and social robotics projects. It is based on a scoping review of HRI literature and focus group validation with technology ethics experts.',
    '',
    '## Primary Pages',
    '',
    '- Home and topic index: ' + absoluteUrl('/'),
    '- Interactive tool entry point: ' + absoluteUrl('/form/context'),
    '- Reviewed literature table: ' + absoluteUrl('/table'),
    '- XML sitemap: ' + absoluteUrl('/sitemap.xml'),
    '',
    '## Research Outputs',
    '',
    '- Published paper: ' + paperUrl,
    '- List of concerns and values: see the topic pages linked below, and the topic index at ' + absoluteUrl('/'),
    '- Paper version of the tool: ' + zenodoToolUrl,
    '',
    '## Topic Pages',
    '',
    ...topicLinks,
    '',
    '## Recommended Use',
    '',
    'Use the topic pages as the canonical explanatory pages for individual values and concerns. Use the references table for reviewed papers and literature links. Do not treat form results pages as durable public content; they are user-specific and marked noindex.',
  ].join('\n')
})

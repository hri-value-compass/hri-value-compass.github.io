export const siteName = 'HRI Value Compass'

export const siteUrl = 'https://hri-value-compass.github.io'

export const defaultDescription =
  'The HRI Value Compass helps human-robot interaction researchers identify values and ethical concerns in social robotics projects.'

export const paperUrl = 'https://doi.org/10.1007/s12369-025-01351-1'

export const zenodoToolUrl = 'https://doi.org/10.5281/zenodo.14002841'

export const absoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : '/' + path
  return siteUrl + (normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, ''))
}

export const truncateDescription = (text: string, maxLength = 155) => {
  const normalized = text.replace(/\s+/g, ' ').trim()

  if (normalized.length <= maxLength) return normalized

  const truncated = normalized.slice(0, maxLength - 1)
  const lastSpace = truncated.lastIndexOf(' ')

  return (lastSpace > 80 ? truncated.slice(0, lastSpace) : truncated).trim() + '...'
}

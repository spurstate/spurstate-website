import type { Handler } from '@netlify/functions'

export const handler: Handler = async () => {
  const repo = process.env.GITHUB_RELEASES_REPO

  const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: { Accept: 'application/vnd.github+json' },
  })

  if (!response.ok) {
    return { statusCode: response.status, body: 'Failed to fetch release' }
  }

  const data = await response.json()
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
}

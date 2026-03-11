import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Auth-Token': process.env.WEBSITE_HEADER_TOKEN!,
    },
    body: event.body,
  })

  return { statusCode: response.ok ? 200 : 502, body: '' }
}

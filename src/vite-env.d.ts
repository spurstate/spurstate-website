/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_WEBHOOK_URL: string
  readonly VITE_GITHUB_RELEASES_REPO: string
  readonly VITE_WEBSITE_HEADER_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

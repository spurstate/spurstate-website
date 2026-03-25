# Spurstate Website

Public-facing marketing site for [Spurstate](https://spurstate.co.nz) — an AI solutions agency based in Auckland, New Zealand.

Built with React 18 + TypeScript + Tailwind CSS v4 + Vite.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, Workdesk teaser |
| `/about` | About & mission |
| `/workdesk` | Workdesk product page |
| `/download` | Download page for Workdesk releases |
| `/contact` | Contact & book a call |

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_N8N_WEBHOOK_URL` | n8n webhook endpoint for Workdesk beta subscriptions |
| `VITE_GITHUB_RELEASES_REPO` | GitHub repo to fetch Workdesk releases from (e.g. `owner/repo`) |
| `VITE_WEBSITE_HEADER_TOKEN` | Bearer token sent in the `Authorization` header for webhook requests |

### 3. Run the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Tech stack

- [React 18](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [React Router v6](https://reactrouter.com)
- [Lucide React](https://lucide.dev) (icons)
- [Vite](https://vitejs.dev)

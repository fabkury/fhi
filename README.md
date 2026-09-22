# fhi.kury.dev

Source for **<https://fhi.kury.dev>**, the website of Fab Health Informatics, LLC (Fabrício Kury, MD).

Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Where things are

| Path | What |
|---|---|
| `src/config.ts` | Site-wide settings: name, contact email, profile links, analytics token |
| `src/data/` | Structured content: `services.ts`, `experience.ts`, `projects.ts`, `publications.ts` |
| `src/pages/` | One file per page (`/`, `/services/`, `/services/vrdc-dua/`, `/work/`, `/publications/`, `/about/`, `/contact/`) |
| `src/layouts/Base.astro` | Header, footer, meta tags, analytics |
| `src/styles/global.css` | Design tokens (colors, light and dark) and shared styles |
| `public/` | Static files served as-is (`CNAME`, `headshot.jpg`, `favicon.svg`) |
| `.github/workflows/deploy.yml` | Build and deploy to Pages |

## Updating content

Most updates are edits to a file in `src/data/`. Push to `main` and the site redeploys in about a minute.

Everything in this repo is public. Only commit content that's cleared for publication.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Analytics

Cloudflare Web Analytics is off until `cfAnalyticsToken` is set in `src/config.ts`.

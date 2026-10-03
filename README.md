# Ketan Jawale — Portfolio

A dark, modern, multi-page portfolio built with **pure HTML5, CSS3 and vanilla JavaScript** — no frameworks, no build step, no dependencies.

Built following the [JavaScript Mastery workflow](https://github.com/jsmastery-pro/skills) (scope → architect/spec → develop → check). Workflow artifacts live in [`docs/scope/`](docs/scope/portfolio-scope.md), [`docs/specs/`](docs/specs/001-static-portfolio-site.md), [`design.md`](design.md), and [`AGENTS.md`](AGENTS.md).

## Pages

| Page | Content |
|---|---|
| `index.html` | Hero, animated stat counters, services, about teaser |
| `about.html` | Story, quick facts, skills, education, certifications (linked PDFs) |
| `experience.html` | Full career timeline — 7 roles, 2013 → 2025, résumé-faithful |
| `projects.html` | Featured olist e-commerce analysis + marketing case studies |
| `contact.html` | Email / phone / location cards + demo contact form |

## Run locally

No install needed:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open http://localhost:8000.

## Deploy

Any static host works — GitHub Pages, Netlify, Vercel, Cloudflare Pages. Upload the folder (everything except this file is optional; `docs/`, `design.md` and `AGENTS.md` are workflow files, safe to publish or exclude).

## Notes

- **Design system:** all colors/spacing live as CSS custom properties in `css/style.css` `:root` — change `--accent` and `--bg` to re-theme the whole site. See `design.md`.
- **Progressive enhancement:** all content is readable with JavaScript disabled; animations respect `prefers-reduced-motion`.
- **Contact form is a demo:** it validates and shows a confirmation but does not send email. Wire it to Formspree/Netlify Forms or a backend when ready.
- **Résumé:** `assets/Ketan_Jawale_Resume_Sept_2026.pdf` is served from the site and linked from the hero, about and contact pages.

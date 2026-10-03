# AGENTS.md — Ketan Jawale Portfolio

Static HTML5/CSS3/JS multi-page portfolio. No framework, no build step, no dependencies.

## Commands
- Run locally: `npx serve .` or `python -m http.server 8000` (open http://localhost:8000)
- Deploy: push to any static host (GitHub Pages / Netlify); no build.

## Structure
- `*.html` — five pages: index, about, experience, projects, contact
- `css/style.css` — single shared stylesheet; ALL design tokens are CSS custom properties in `:root` (see design.md)
- `js/main.js` — single shared script: nav toggle, active-link highlight, scroll reveal, stat counters, text rotator, contact form demo
- `assets/` — resume PDF
- `docs/scope/`, `docs/specs/` — JSM workflow files (scope + spec 001)

## Conventions
- No inline styles; everything goes through style.css classes.
- Icons are inline SVG. No emoji in UI. No external font/icon CDNs — system font stack.
- Animations must respect `prefers-reduced-motion` (main.js already handles reveal/counter/rotator; new effects must too).
- Content must stay faithful to the resume in `assets/`; do not invent employers, dates, or metrics.
- Keep pages self-sufficient: content readable with JS disabled (no content hidden behind `.reveal` initial opacity in HTML).

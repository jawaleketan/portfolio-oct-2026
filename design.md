# Design System — "Dark Analytics"

Character: dark, modern, data-driven. Feels like a marketing dashboard at night — glassy surfaces, one confident accent.

The real values live ONLY in `css/style.css` (custom properties). This file documents intent; never duplicate values here.

## Tokens (defined in css/style.css `:root`)
- `--bg`, `--bg-soft`, `--card` — near-black layered surfaces with subtle gradients
- `--accent`, `--accent-2`, `--accent-soft` — cyan→blue duotone for links, buttons, highlights, glows
- `--text`, `--muted` — off-white / grey-lavender text pair (WCAG AA on dark surfaces)
- `--radius`, `--border` — glassy card language (1px translucent borders, 16–24px corners)

## Rules
- Accent is the ONLY saturated color; success/warning greens appear only in form feedback.
- Type scale: clamp()-based fluid sizes; display headings up to 4rem, body ≥1rem.
- Cards: translucent backgrounds + 1px borders + backdrop blur; hover lifts with accent border.
- Motion: fade/slide reveals on scroll, 0.2–0.5s ease; all disabled under `prefers-reduced-motion`.
- Numbers and stats are a first-class motif — metric counters in hero-adjacent sections, accent-colored figures.
- Icons are inline SVG, never emoji, never icon-font downloads.

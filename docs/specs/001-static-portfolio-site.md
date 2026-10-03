# Spec 001 — Static Portfolio Site

**Status:** Accepted
**Owner:** Ketan Jawale
**Stack decision:** Pure HTML5 + CSS3 + vanilla JavaScript. No frameworks, no build step. Any static host (GitHub Pages, Netlify) serves it as-is.

## Requirements

1. **R1 — Multi-page navigation:** Five pages (index, about, experience, projects, contact) linked by a shared header nav; active page highlighted; mobile hamburger menu works on all pages.
2. **R2 — Faithful resume content:** Every role (7 jobs, 2013–2025), skills, education, and certifications come from the Sept 2026 resume; numbers (250% traffic, 35% DA, 45% ROI, 60% engagement) are preserved and surfaced.
3. **R3 — Dark modern design:** Dark gradient background, single accent color, glassy cards, consistent type scale across all pages — defined once in `css/style.css` and documented in `design.md`.
4. **R4 — Professional profile emphasis:** Position Ketan as a hybrid "Digital Marketing × Data Analytics" professional; the olist e-commerce data analysis project is featured on projects.html with its real GitHub link.
5. **R5 — Contact completeness:** Email, phone, and Dombivli-Mumbai location are shown on contact.html; email links as mailto, phone as tel; a demo contact form (no backend) gives inline success feedback instead of submitting anywhere.
6. **R6 — Progressive enhancement:** Content is fully readable with JS disabled; animations are additive only and respect `prefers-reduced-motion`.
7. **R7 — Shareable credentials:** GitHub project link and all four certification links from the resume render as working external links.

## Decision

- **Static multi-page** over SPA: matches "HTML5, CSS3, JavaScript" request exactly, zero dependencies, trivially hostable.
- **One shared stylesheet + one shared script** so design and behavior stay consistent and edits are single-point.
- **Scroll-reveal + counters** via a small IntersectionObserver utility (no animation library), disabled under reduced motion.

## Acceptance criteria

- AC1: Every internal nav link lands on the correct page and marks itself active; hamburger opens/closes below 768px.
- AC2: All resume roles, dates, achievements, skills, education, and certifications appear, spelled as in the PDF.
- AC3: One accent color and one background token drive the whole palette; swapping them re-themes every page.
- AC4: projects.html links to github.com/jawaleketan/olist-ecommerce-sales-analysis-forecasting; about.html links all four certification PDFs.
- AC5: Contact page shows email + phone + location as clickable links; form click shows inline success state without navigation.
- AC6: With JS disabled, all text content is visible (no opacity-hidden content); with reduced motion, no animations run.
- AC7: All pages render correctly at 375px / 768px / 1440px widths with no horizontal scroll.

## Build plan

1. Foundation: css/style.css tokens + components, js/main.js, AGENTS.md, design.md (serves R3, R6).
2. index.html (R1, R2, R4).
3. about.html (R1, R2, R7).
4. experience.html (R1, R2).
5. projects.html (R1, R4, R7).
6. contact.html (R1, R5).
7. Verify in browser at 3 widths; fix defects (R1–R7).

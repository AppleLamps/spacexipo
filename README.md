# SpaceX S-1 Investor Showcase

Professional, self-contained vanilla JavaScript website highlighting the most important information from Space Exploration Technologies Corp.'s Form S-1 registration statement (filed with the SEC on May 20, 2026).

- **Design philosophy**: Industrial Utility (condensed typography, thick steel borders, safety-yellow accents, spec-sheet data presentation)
- **Tech**: 100% vanilla HTML + CSS + ES Modules JavaScript (zero dependencies)
- **Data**: All metrics, financials, and narrative pulled directly from the S-1

## Live Demo

Deployed on Vercel at your custom domain (or the auto-generated `*.vercel.app` URL after first deploy).

## Local Development

```bash
# Option 1 — Vercel CLI (recommended, matches production)
npm i -g vercel
vercel dev

# Option 2 — Any static server
npx serve . -p 8765
# or
python -m http.server 8765
```

Open http://localhost:8765

## Deploy to Vercel (Recommended)

### Easiest (GitHub + Vercel)
1. Push this folder (or the whole repo) to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects it as a static site.
4. **Important for monorepos**: If your repo root is `spacex/`, set the **Root Directory** to `spacex-s1-showcase` in the Vercel project settings.
5. Deploy. Done.

### Quick Deploy (no Git)
1. Install Vercel CLI: `npm i -g vercel`
2. `cd spacex-s1-showcase`
3. `vercel`
4. Follow the prompts (it will link or create a new project).

Subsequent deploys: just `git push` (or `vercel --prod` for manual).

## Project Structure

```
spacex-s1-showcase/
├── index.html          # Main entry point (all content + structure)
├── css/
│   ├── base.css        # Industrial palette, typography, resets, counters
│   └── components.css  # Tabs, charts, nav, cards, tables, stripes
├── js/
│   ├── main.js         # Bootloader + scrollspy nav
│   ├── counters.js     # Animated spec-sheet numbers (IntersectionObserver)
│   ├── tabs.js         # Pillar switcher (Space / Connectivity / AI)
│   └── charts.js       # Pure-CSS/DOM subscriber growth + revenue mix
├── vercel.json         # Production headers + caching (long-term immutable for assets)
├── package.json        # Project metadata + `vercel dev`
├── .gitignore
└── README.md
```

## Key Sections (from the S-1)

- Operating snapshot (10.3 M subscribers, 9,600 satellites, 650+ launches, etc.)
- Three Pillars interactive panels (Space, Connectivity/Starlink, AI/xAI)
- Financial highlights with 2025 revenue mix and segment Adj. EBITDA
- Use of proceeds + dual-class structure note
- Full SEC-style legal disclaimer

## Customization Notes

- All numbers and text are taken verbatim from the May 20, 2026 S-1.
- The site is intentionally **not** a full prospectus replacement — it is a high-signal briefing tool.
- To update data later, edit the relevant sections in `index.html` and the data objects in the JS files.
- Fonts are loaded from Google Fonts (Oswald + IBM Plex family) — cached aggressively on Vercel.

## License / Disclaimer

This is an unofficial investor education tool generated from public SEC filing data. It is **not** affiliated with SpaceX, xAI, or the SEC. Always read the complete registration statement before making investment decisions.

---

Built for Vercel static hosting. Push → Deploy → Instant global CDN. Zero config beyond the included `vercel.json`.
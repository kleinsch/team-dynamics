# Team Dynamics

Functional prototype: managers gain deeper understanding of team dynamics through data visualization and AI summarization.

## Tech Stack

- pnpm + TypeScript + React + Vite
- Tailwind CSS + shadcn/ui
- Deployed to Cloudflare Pages
- No backend — static fake data powers the demo

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run linter
- `pnpm preview` — preview production build locally

## Project Structure

```
src/
  components/   — React components
  pages/        — Page-level components (Home, TeamMember, Settings)
  data/         — Static fake data (JSON/TS fixtures)
  lib/          — Utilities, types, helpers
  hooks/        — Custom React hooks
docs/           — Specs and documentation
```

## Conventions

- TypeScript strict mode
- Functional React components only
- Tailwind for all styling (no CSS files)
- shadcn/ui for UI primitives
- Static data organized by week (weeks 1-4)

## Key Concepts

- 12 team members with fake data across 4 weeks
- User advances time week-by-week via UI control
- AI features: attention ranking, talking points, team insights
- Management style customization affects AI output
- Network graph shows interaction strength between team members

## Development Phases

1. Hello world — project setup and deploy
2. Seed data generation
3. UI creation and visualization
4. LLM integration

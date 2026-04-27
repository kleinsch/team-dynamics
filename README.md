# Team Dynamics

A functional prototype demonstrating how managers can gain deeper understanding of the dynamics within their engineering team, using data visualization and AI summarization to prioritize areas to focus.

## Features

- **Team Overview** — tiles for each team member showing key metrics, plus a network graph of team interactions
- **Team Member Detail** — drill into individual performance, collaboration patterns, and AI-generated insights
- **AI-Powered Insights** — team members ranked by attention needed, suggested 1-1 talking points, team-level insights
- **Management Style** — customizable management profile that tailors AI guidance to your style
- **Time Simulation** — advance through weeks of data to see how team dynamics evolve

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for build tooling
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) for UI
- [Cloudflare Pages](https://pages.cloudflare.com/) for deployment
- Static fake data (no backend)

## Getting Started

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build        # outputs to dist/
pnpm preview      # preview build locally
```

Deployed to Cloudflare Pages. Push to `main` to trigger deployment.

## Project Structure

```
src/
  components/   — React components
  pages/        — Page-level components
  data/         — Static fake data fixtures
  lib/          — Utilities, types, helpers
  hooks/        — Custom React hooks
docs/           — Specs and documentation
```

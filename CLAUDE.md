# Team Dynamics

Functional prototype: managers gain deeper understanding of team dynamics through data visualization and AI summarization.

## Tech Stack

- pnpm + TypeScript + React + Vite
- Tailwind CSS + shadcn/ui
- Deployed to Cloudflare Pages
- No backend — static fake data powers the demo

## Do NOT

- Add new dependencies without explicit approval
- Create wrapper abstractions around shadcn/ui components
- Add state management libraries -- use React state/context
- Over-engineer: no barrel files, no index re-exports, no "utils" dumping grounds
- Use `npm` or `yarn` -- only `pnpm`
- Skip TypeScript strict checks or use `any`
- Add comments, docstrings, or type annotations to code you didn't change
- Suppress lint rules (no eslint-disable comments) -- fix the underlying issue instead
- Use `git -C` -- just run `git` directly, you're already in the project directory
- Source `~/.zshrc` or any shell init before commands -- tools are already on PATH
- Use inline `import("./foo").Type` syntax -- use top-level imports instead
- Commit or deploy without running `/verify` first

## Commands

- `pnpm dev` — start dev server (port 5173)
- `pnpm build` — production build (typecheck + vite build)
- `pnpm lint` — run linter
- `pnpm preview` — preview production build locally
- `pnpm deploy` — deploy to Cloudflare Pages
- `/verify` — **run before committing or deploying** — typechecks, lints, builds, starts dev server, and verifies the page loads via Chrome

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

# Team Dynamics — Development Phases

## Phase 1: Hello World

Project setup and initial deployment.

- Scaffold Vite + React + TypeScript project
- Configure Tailwind CSS and shadcn/ui
- Set up basic routing (Home, Team Member, Settings pages as stubs)
- Deploy to Cloudflare Pages
- Confirm end-to-end: local dev works, build works, deploy works

## Phase 2: Seed Data Generation

Generate static fake data to power the demo.

- Define TypeScript types for all entities (Employee, Meeting, PullRequest, SurveyResponse)
- Create 12 employees with realistic names and titles
- Generate 4 weeks of meetings, PRs, and survey responses
- Build derived data: interaction strengths, weekly summaries

## Phase 3: UI Creation and Visualization

Build out the three pages with real data.

- **Home page**: team member tiles with metrics, attention scores, network graph
- **Team member detail page**: individual metrics, collaboration patterns, survey trends
- **Settings page**: management style customization form
- **Time control**: week selector in top bar, all views react to selected week
- **Network graph**: interactive visualization of team interaction strengths

## Phase 4: LLM Integration

Add AI-powered insights.

- Connect to Claude API for AI features
- Implement management style prompt injection
- Attention ranking: score and rank team members by who needs focus
- Team insights: high-level summary on home page
- Individual insights: detailed observations on team member page
- 1-1 talking points: suggested conversation starters

## Future Iterations

- Refine visualizations based on feedback
- Add more data dimensions
- Improve AI prompt quality
- Polish UI and interactions

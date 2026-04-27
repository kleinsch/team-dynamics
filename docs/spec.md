# Team Dynamics — Product Spec

## Vision

A prototype that demonstrates how managers can gain deeper understanding of their engineering team's dynamics. Uses data visualization and AI summarization to surface what matters, so managers know where to focus.

This is a functional demo — a small set of features executed effectively. Polish is secondary to demonstrating value.

## Data Sources

All data is static/fake, generated for demo purposes. No real API.

- **Meeting schedules** — who meets with whom, how often
- **Pull request data** — authorship, reviews, comments
- **Engagement surveys** — weekly mood ratings, peer recognition, blockers

## Pages

### Home

The main dashboard. Two primary elements:

1. **Team member tiles** — one per team member, showing:
   - Name and title
   - Key output metrics (PRs, meetings)
   - AI attention score (ranked by attention needed)
   - Quick mood indicator from surveys

2. **Network graph** — visual map of interaction strength between team members
   - Edge thickness = interaction frequency (meetings + PR comments + survey mentions)
   - Helps identify clusters, isolated members, over-reliance patterns

### Team Member Detail

Drill-in page for a single team member:

- Detailed metrics over time
- Collaboration patterns (who they work with most)
- Survey response trends
- AI-generated insights and suggested 1-1 talking points

### Settings

- **Management style customization** — defaults to a typical management profile, can be customized
  - This profile is injected into LLM prompts so insights and guidance match the user's style
  - Examples: coaching-oriented, results-focused, people-first, etc.

## Time Simulation

- App defaults to week 1
- Button in the top bar to advance forward week by week (4 weeks total)
- All visualizations and AI responses update based on selected week
- Demonstrates how team dynamics evolve over time

## AI Features

All AI features use the management style profile for tailored output.

- **Attention ranking** — team members ranked by who needs the most attention, shown on home page tiles
- **Team insights** — high-level summary of team health and dynamics on home page
- **Individual insights** — detailed observations on team member detail page
- **1-1 talking points** — suggested conversation starters based on data trends

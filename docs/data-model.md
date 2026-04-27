# Team Dynamics — Data Model

## Core Entities

### Employee

```typescript
interface Employee {
  id: string
  name: string
  title: string
}
```

12 team members with varied titles (senior engineer, staff engineer, engineering manager, etc.).

### Meeting

```typescript
interface Meeting {
  id: string
  employeeIds: string[]   // 2+ employees
  name: string
  date: string            // ISO date
}
```

Recurring 1-1s, team standups, planning meetings, etc.

### PullRequest

```typescript
interface PullRequest {
  id: string
  title: string
  authorId: string        // employee id
  commenterIds: string[]  // employee ids who commented
  approverId: string      // employee id who approved
  date: string            // ISO date
}
```

### SurveyResponse

```typescript
interface SurveyResponse {
  employeeId: string
  date: string            // ISO date
  mood: number            // 1-5 rating ("how are you?")
  helpfulColleagues: string[]  // 1-2 employee ids ("who helped you this week?")
  blockers: string        // free text ("what slowed you down?")
}
```

Surveys are weekly — one response per employee per week.

## Derived Data

### Interaction Strength

Computed from raw data to power the network graph. For each pair of employees:

- Meetings together (co-attendance)
- PR comments (author <-> commenter)
- Survey mentions (helpful colleagues)

Weighted sum produces an interaction score per pair per week.

### Employee Weekly Summary

Aggregated per employee per week:

- Number of PRs authored
- Number of PR comments made
- Number of meetings attended
- Mood score
- Who they mentioned as helpful
- Blocker text

## Time Model

- 4 weeks of data (week 1 through week 4)
- Data fixtures are organized by week
- App starts at week 1, user advances forward
- Visualizations show data for the selected week (and optionally trends across prior weeks)

## Data Storage

All data lives as static TypeScript files in `src/data/`. No API calls, no database. Data is imported directly by components.

import type { PullRequest } from './types'

export const pullRequests: PullRequest[] = [
  // =====================
  // WEEK 1: 2026-03-02 to 2026-03-06
  // =====================

  // Alice — 5 PRs, Atlas only. Approved by self (tech lead). Commenters: Henry, Karen only.
  { id: 'pr-w1-alice-1', title: 'Migrate user service to new API gateway', authorId: 'alice', commenterIds: ['henry', 'karen'], approverId: 'alice', date: '2026-03-02' },
  { id: 'pr-w1-alice-2', title: 'Add retry logic to Atlas queue consumer', authorId: 'alice', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-03' },
  { id: 'pr-w1-alice-3', title: 'Update Atlas DB migration scripts', authorId: 'alice', commenterIds: ['karen'], approverId: 'alice', date: '2026-03-04' },
  { id: 'pr-w1-alice-4', title: 'Fix connection pooling in Atlas services', authorId: 'alice', commenterIds: ['henry', 'karen'], approverId: 'alice', date: '2026-03-05' },
  { id: 'pr-w1-alice-5', title: 'Add health check endpoints for Atlas', authorId: 'alice', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-06' },

  // Bob — 2 PRs (low personal output), reviews others. Approved by Grace.
  { id: 'pr-w1-bob-1', title: 'Update Beacon component library exports', authorId: 'bob', commenterIds: ['grace', 'carol'], approverId: 'bob', date: '2026-03-03' },
  { id: 'pr-w1-bob-2', title: 'Fix Beacon nav breadcrumb styling', authorId: 'bob', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-05' },

  // Carol — 5 PRs, solid output. Approved by Bob.
  { id: 'pr-w1-carol-1', title: 'Build dashboard filter component', authorId: 'carol', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-02' },
  { id: 'pr-w1-carol-2', title: 'Add date range picker to Beacon', authorId: 'carol', commenterIds: ['bob', 'iris'], approverId: 'bob', date: '2026-03-03' },
  { id: 'pr-w1-carol-3', title: 'Implement chart tooltip interactions', authorId: 'carol', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-carol-4', title: 'Add export CSV feature to dashboard', authorId: 'carol', commenterIds: ['bob', 'leo'], approverId: 'bob', date: '2026-03-05' },
  { id: 'pr-w1-carol-5', title: 'Fix responsive layout for Beacon cards', authorId: 'carol', commenterIds: ['iris'], approverId: 'bob', date: '2026-03-06' },

  // David — 1 PR (low output, heavy meetings)
  { id: 'pr-w1-david-1', title: 'Update API client configuration', authorId: 'david', commenterIds: ['grace', 'alice'], approverId: 'bob', date: '2026-03-04' },

  // Elena — 2 PRs (new hire, ramping). Approved by Bob. Lots of comment questions.
  { id: 'pr-w1-elena-1', title: 'Add loading spinner to Beacon pages', authorId: 'elena', commenterIds: ['leo', 'bob', 'grace'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-elena-2', title: 'Fix button alignment in Beacon header', authorId: 'elena', commenterIds: ['leo', 'grace'], approverId: 'bob', date: '2026-03-06' },

  // Frank — 7 PRs (high output, lone wolf). Self-approves. No outside commenters.
  { id: 'pr-w1-frank-1', title: 'Implement SSO token validation', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-02' },
  { id: 'pr-w1-frank-2', title: 'Add permission scope parser', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-02' },
  { id: 'pr-w1-frank-3', title: 'Build role hierarchy resolver', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-03' },
  { id: 'pr-w1-frank-4', title: 'Add audit logging for auth events', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-04' },
  { id: 'pr-w1-frank-5', title: 'Implement RBAC middleware', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-05' },
  { id: 'pr-w1-frank-6', title: 'Add session invalidation endpoint', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-05' },
  { id: 'pr-w1-frank-7', title: 'Fix token refresh race condition', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-06' },

  // Grace — 3 PRs (moderate output, high collaboration). Comments on many others.
  { id: 'pr-w1-grace-1', title: 'Add shared error boundary component', authorId: 'grace', commenterIds: ['bob', 'carol'], approverId: 'bob', date: '2026-03-02' },
  { id: 'pr-w1-grace-2', title: 'Implement API response caching layer', authorId: 'grace', commenterIds: ['alice', 'bob'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-grace-3', title: 'Add feature flag provider', authorId: 'grace', commenterIds: ['leo', 'james'], approverId: 'bob', date: '2026-03-06' },

  // Henry — 5 PRs, Atlas only. Approved by Alice.
  { id: 'pr-w1-henry-1', title: 'Refactor Atlas data access layer', authorId: 'henry', commenterIds: ['alice', 'karen'], approverId: 'alice', date: '2026-03-02' },
  { id: 'pr-w1-henry-2', title: 'Add Atlas batch processing support', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-03' },
  { id: 'pr-w1-henry-3', title: 'Optimize Atlas query performance', authorId: 'henry', commenterIds: ['alice', 'karen'], approverId: 'alice', date: '2026-03-04' },
  { id: 'pr-w1-henry-4', title: 'Add Atlas integration test suite', authorId: 'henry', commenterIds: ['karen'], approverId: 'alice', date: '2026-03-05' },
  { id: 'pr-w1-henry-5', title: 'Fix Atlas event ordering bug', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-06' },

  // Iris — 6 PRs (high output, consistent). Approved by Bob.
  { id: 'pr-w1-iris-1', title: 'Build Beacon analytics chart components', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-02' },
  { id: 'pr-w1-iris-2', title: 'Add sparkline widget for Beacon', authorId: 'iris', commenterIds: ['bob', 'carol'], approverId: 'bob', date: '2026-03-03' },
  { id: 'pr-w1-iris-3', title: 'Implement Beacon data table sorting', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-03' },
  { id: 'pr-w1-iris-4', title: 'Add color theme tokens for charts', authorId: 'iris', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-iris-5', title: 'Build KPI summary cards', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-05' },
  { id: 'pr-w1-iris-6', title: 'Fix chart resize observer leak', authorId: 'iris', commenterIds: ['carol'], approverId: 'bob', date: '2026-03-06' },

  // James — 5 PRs, Beacon focused. Approved by Bob.
  { id: 'pr-w1-james-1', title: 'Add Beacon user profile API integration', authorId: 'james', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-02' },
  { id: 'pr-w1-james-2', title: 'Build notification dropdown component', authorId: 'james', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-03' },
  { id: 'pr-w1-james-3', title: 'Implement Beacon search with debounce', authorId: 'james', commenterIds: ['grace', 'iris'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-james-4', title: 'Add pagination to Beacon list views', authorId: 'james', commenterIds: ['bob', 'carol'], approverId: 'bob', date: '2026-03-05' },
  { id: 'pr-w1-james-5', title: 'Fix Beacon API error handling', authorId: 'james', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-06' },

  // Karen — 5 PRs, Atlas only. Approved by Alice.
  { id: 'pr-w1-karen-1', title: 'Add Atlas config validation', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-02' },
  { id: 'pr-w1-karen-2', title: 'Implement Atlas logging middleware', authorId: 'karen', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-03' },
  { id: 'pr-w1-karen-3', title: 'Add Atlas rate limiting', authorId: 'karen', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-04' },
  { id: 'pr-w1-karen-4', title: 'Fix Atlas serialization edge case', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-05' },
  { id: 'pr-w1-karen-5', title: 'Add Atlas metrics collection', authorId: 'karen', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-06' },

  // Leo — 3 PRs (moderate, pairs with Elena). Approved by Bob.
  { id: 'pr-w1-leo-1', title: 'Add onboarding wizard scaffolding', authorId: 'leo', commenterIds: ['bob', 'elena'], approverId: 'bob', date: '2026-03-02' },
  { id: 'pr-w1-leo-2', title: 'Build form validation helpers', authorId: 'leo', commenterIds: ['grace', 'elena'], approverId: 'bob', date: '2026-03-04' },
  { id: 'pr-w1-leo-3', title: 'Add Beacon accessibility audit fixes', authorId: 'leo', commenterIds: ['bob', 'elena'], approverId: 'bob', date: '2026-03-06' },

  // =====================
  // WEEK 2: 2026-03-09 to 2026-03-13
  // =====================

  // Alice — 5 PRs, still Atlas only
  { id: 'pr-w2-alice-1', title: 'Add Atlas canary deployment config', authorId: 'alice', commenterIds: ['henry', 'karen'], approverId: 'alice', date: '2026-03-09' },
  { id: 'pr-w2-alice-2', title: 'Implement Atlas rollback mechanism', authorId: 'alice', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-10' },
  { id: 'pr-w2-alice-3', title: 'Add Atlas traffic splitting', authorId: 'alice', commenterIds: ['karen'], approverId: 'alice', date: '2026-03-11' },
  { id: 'pr-w2-alice-4', title: 'Fix Atlas cache invalidation timing', authorId: 'alice', commenterIds: ['henry', 'karen'], approverId: 'alice', date: '2026-03-12' },
  { id: 'pr-w2-alice-5', title: 'Add Atlas load testing scripts', authorId: 'alice', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-13' },

  // Bob — 2 PRs still
  { id: 'pr-w2-bob-1', title: 'Refactor Beacon state management', authorId: 'bob', commenterIds: ['grace', 'iris'], approverId: 'bob', date: '2026-03-10' },
  { id: 'pr-w2-bob-2', title: 'Add Beacon design system docs', authorId: 'bob', commenterIds: ['carol'], approverId: 'bob', date: '2026-03-12' },

  // Carol — 5 PRs, still solid
  { id: 'pr-w2-carol-1', title: 'Add drill-down charts to Beacon', authorId: 'carol', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-carol-2', title: 'Implement Beacon dashboard presets', authorId: 'carol', commenterIds: ['bob', 'iris'], approverId: 'bob', date: '2026-03-10' },
  { id: 'pr-w2-carol-3', title: 'Build comparison view for metrics', authorId: 'carol', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-carol-4', title: 'Add Beacon widget drag-and-drop', authorId: 'carol', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-12' },
  { id: 'pr-w2-carol-5', title: 'Fix Beacon chart animation jank', authorId: 'carol', commenterIds: ['iris', 'bob'], approverId: 'bob', date: '2026-03-13' },

  // David — 1 PR
  { id: 'pr-w2-david-1', title: 'Update Beacon API endpoint docs', authorId: 'david', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-11' },

  // Elena — 3 PRs (ramping up)
  { id: 'pr-w2-elena-1', title: 'Add user avatar component', authorId: 'elena', commenterIds: ['leo', 'bob'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-elena-2', title: 'Build Beacon settings page layout', authorId: 'elena', commenterIds: ['leo', 'grace'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-elena-3', title: 'Add form field validation messages', authorId: 'elena', commenterIds: ['leo'], approverId: 'bob', date: '2026-03-13' },

  // Frank — 7 PRs, still lone wolf
  { id: 'pr-w2-frank-1', title: 'Build OAuth2 provider integration', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-09' },
  { id: 'pr-w2-frank-2', title: 'Add SAML assertion parser', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-09' },
  { id: 'pr-w2-frank-3', title: 'Implement MFA enrollment flow', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-10' },
  { id: 'pr-w2-frank-4', title: 'Add API key rotation mechanism', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-11' },
  { id: 'pr-w2-frank-5', title: 'Build permission policy engine', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-12' },
  { id: 'pr-w2-frank-6', title: 'Add cross-origin auth handling', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-12' },
  { id: 'pr-w2-frank-7', title: 'Fix token expiry edge cases', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-13' },

  // Grace — 3 PRs
  { id: 'pr-w2-grace-1', title: 'Add global notification system', authorId: 'grace', commenterIds: ['bob', 'james'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-grace-2', title: 'Build shared loading skeleton', authorId: 'grace', commenterIds: ['carol', 'elena'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-grace-3', title: 'Add performance monitoring hooks', authorId: 'grace', commenterIds: ['bob', 'iris'], approverId: 'bob', date: '2026-03-13' },

  // Henry — 5 PRs, Atlas only
  { id: 'pr-w2-henry-1', title: 'Add Atlas event sourcing layer', authorId: 'henry', commenterIds: ['alice', 'karen'], approverId: 'alice', date: '2026-03-09' },
  { id: 'pr-w2-henry-2', title: 'Implement Atlas CQRS pattern', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-10' },
  { id: 'pr-w2-henry-3', title: 'Add Atlas snapshot mechanism', authorId: 'henry', commenterIds: ['karen'], approverId: 'alice', date: '2026-03-11' },
  { id: 'pr-w2-henry-4', title: 'Fix Atlas projection rebuild', authorId: 'henry', commenterIds: ['alice', 'karen'], approverId: 'alice', date: '2026-03-12' },
  { id: 'pr-w2-henry-5', title: 'Add Atlas end-to-end smoke tests', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-13' },

  // Iris — 6 PRs
  { id: 'pr-w2-iris-1', title: 'Build Beacon heatmap component', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-iris-2', title: 'Add Beacon scatter plot widget', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-10' },
  { id: 'pr-w2-iris-3', title: 'Implement Beacon treemap view', authorId: 'iris', commenterIds: ['carol'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-iris-4', title: 'Add chart crosshair interactions', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-12' },
  { id: 'pr-w2-iris-5', title: 'Build Beacon data zoom controls', authorId: 'iris', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-12' },
  { id: 'pr-w2-iris-6', title: 'Fix Beacon chart SSR hydration', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-13' },

  // James — 5 PRs, Beacon
  { id: 'pr-w2-james-1', title: 'Add Beacon real-time data hooks', authorId: 'james', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-james-2', title: 'Build Beacon websocket connection', authorId: 'james', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-10' },
  { id: 'pr-w2-james-3', title: 'Implement Beacon event stream', authorId: 'james', commenterIds: ['bob', 'iris'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-james-4', title: 'Add Beacon connection retry logic', authorId: 'james', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-12' },
  { id: 'pr-w2-james-5', title: 'Fix Beacon data sync race condition', authorId: 'james', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-13' },

  // Karen — 5 PRs, Atlas only
  { id: 'pr-w2-karen-1', title: 'Add Atlas deployment automation', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-09' },
  { id: 'pr-w2-karen-2', title: 'Implement Atlas blue-green deploy', authorId: 'karen', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-10' },
  { id: 'pr-w2-karen-3', title: 'Add Atlas monitoring dashboards', authorId: 'karen', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-11' },
  { id: 'pr-w2-karen-4', title: 'Fix Atlas deployment rollback', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-12' },
  { id: 'pr-w2-karen-5', title: 'Add Atlas release notes generator', authorId: 'karen', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-13' },

  // Leo — 3 PRs
  { id: 'pr-w2-leo-1', title: 'Build onboarding step progress bar', authorId: 'leo', commenterIds: ['elena', 'bob'], approverId: 'bob', date: '2026-03-09' },
  { id: 'pr-w2-leo-2', title: 'Add Beacon keyboard navigation', authorId: 'leo', commenterIds: ['elena', 'grace'], approverId: 'bob', date: '2026-03-11' },
  { id: 'pr-w2-leo-3', title: 'Improve form tab order and focus', authorId: 'leo', commenterIds: ['elena'], approverId: 'bob', date: '2026-03-13' },

  // =====================
  // WEEK 3: 2026-03-16 to 2026-03-20
  // Atlas ships — trio starts diversifying
  // Bob review load increases
  // Carol slowing down
  // James bridges into Cipher
  // =====================

  // Alice — 3 PRs (winding down Atlas, starting to review Beacon PRs)
  { id: 'pr-w3-alice-1', title: 'Final Atlas migration cutover script', authorId: 'alice', commenterIds: ['henry', 'karen'], approverId: 'alice', date: '2026-03-16' },
  { id: 'pr-w3-alice-2', title: 'Atlas post-migration cleanup', authorId: 'alice', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-18' },
  { id: 'pr-w3-alice-3', title: 'Add deprecation notices for old API', authorId: 'alice', commenterIds: ['grace', 'bob'], approverId: 'alice', date: '2026-03-20' },

  // Bob — 1 PR (own output dropping, reviewing 5+ PRs)
  { id: 'pr-w3-bob-1', title: 'Update Beacon build configuration', authorId: 'bob', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-18' },

  // Carol — 3 PRs (slowing down, mood dropping)
  { id: 'pr-w3-carol-1', title: 'Add Beacon data aggregation view', authorId: 'carol', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-carol-2', title: 'Fix Beacon filter state persistence', authorId: 'carol', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-18' },
  { id: 'pr-w3-carol-3', title: 'Update Beacon chart color scheme', authorId: 'carol', commenterIds: ['iris'], approverId: 'bob', date: '2026-03-20' },

  // David — 0 PRs this week

  // Elena — 5 PRs (at team average now)
  { id: 'pr-w3-elena-1', title: 'Build Beacon user preferences page', authorId: 'elena', commenterIds: ['leo', 'bob'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-elena-2', title: 'Add Beacon notification preferences', authorId: 'elena', commenterIds: ['leo'], approverId: 'bob', date: '2026-03-17' },
  { id: 'pr-w3-elena-3', title: 'Implement Beacon theme switcher', authorId: 'elena', commenterIds: ['grace', 'bob'], approverId: 'bob', date: '2026-03-18' },
  { id: 'pr-w3-elena-4', title: 'Add Beacon timezone support', authorId: 'elena', commenterIds: ['leo', 'james'], approverId: 'bob', date: '2026-03-19' },
  { id: 'pr-w3-elena-5', title: 'Fix Beacon locale formatting', authorId: 'elena', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-20' },

  // Frank — 6 PRs (still high, James now commenting)
  { id: 'pr-w3-frank-1', title: 'Add Cipher key rotation scheduler', authorId: 'frank', commenterIds: ['james'], approverId: 'frank', date: '2026-03-16' },
  { id: 'pr-w3-frank-2', title: 'Implement Cipher cert pinning', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-17' },
  { id: 'pr-w3-frank-3', title: 'Build Cipher admin audit trail', authorId: 'frank', commenterIds: ['james'], approverId: 'frank', date: '2026-03-18' },
  { id: 'pr-w3-frank-4', title: 'Add Cipher IP allowlist feature', authorId: 'frank', commenterIds: ['james'], approverId: 'frank', date: '2026-03-19' },
  { id: 'pr-w3-frank-5', title: 'Implement Cipher device trust', authorId: 'frank', commenterIds: [], approverId: 'frank', date: '2026-03-19' },
  { id: 'pr-w3-frank-6', title: 'Fix Cipher session migration', authorId: 'frank', commenterIds: ['james'], approverId: 'frank', date: '2026-03-20' },

  // Grace — 3 PRs (still connecting, starting to feel load)
  { id: 'pr-w3-grace-1', title: 'Add cross-project type sharing', authorId: 'grace', commenterIds: ['alice', 'bob'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-grace-2', title: 'Build shared analytics event layer', authorId: 'grace', commenterIds: ['james', 'carol'], approverId: 'bob', date: '2026-03-18' },
  { id: 'pr-w3-grace-3', title: 'Add error reporting integration', authorId: 'grace', commenterIds: ['bob', 'frank'], approverId: 'bob', date: '2026-03-20' },

  // Henry — 3 PRs (winding down Atlas, starting to look at Beacon)
  { id: 'pr-w3-henry-1', title: 'Atlas final performance benchmarks', authorId: 'henry', commenterIds: ['alice', 'karen'], approverId: 'alice', date: '2026-03-16' },
  { id: 'pr-w3-henry-2', title: 'Atlas documentation update', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-18' },
  { id: 'pr-w3-henry-3', title: 'Review and update API versioning', authorId: 'henry', commenterIds: ['grace', 'bob'], approverId: 'bob', date: '2026-03-20' },

  // Iris — 6 PRs (consistent)
  { id: 'pr-w3-iris-1', title: 'Build Beacon funnel chart', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-iris-2', title: 'Add Beacon sankey diagram', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-17' },
  { id: 'pr-w3-iris-3', title: 'Implement Beacon gauge widget', authorId: 'iris', commenterIds: ['carol'], approverId: 'bob', date: '2026-03-18' },
  { id: 'pr-w3-iris-4', title: 'Add Beacon chart annotations', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-19' },
  { id: 'pr-w3-iris-5', title: 'Build Beacon radar chart', authorId: 'iris', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-19' },
  { id: 'pr-w3-iris-6', title: 'Fix Beacon chart legend overflow', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-20' },

  // James — 4 PRs (split: 2 Beacon, 2 Cipher)
  { id: 'pr-w3-james-1', title: 'Add Beacon live metrics panel', authorId: 'james', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-james-2', title: 'Build Beacon alert configuration', authorId: 'james', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-17' },
  { id: 'pr-w3-james-3', title: 'Add Cipher SSO login page', authorId: 'james', commenterIds: ['frank'], approverId: 'frank', date: '2026-03-19' },
  { id: 'pr-w3-james-4', title: 'Implement Cipher auth error pages', authorId: 'james', commenterIds: ['frank', 'grace'], approverId: 'frank', date: '2026-03-20' },

  // Karen — 3 PRs (winding down Atlas)
  { id: 'pr-w3-karen-1', title: 'Atlas cleanup: remove feature flags', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-16' },
  { id: 'pr-w3-karen-2', title: 'Atlas: archive old migration scripts', authorId: 'karen', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-18' },
  { id: 'pr-w3-karen-3', title: 'Add Atlas runbook documentation', authorId: 'karen', commenterIds: ['henry'], approverId: 'alice', date: '2026-03-20' },

  // Leo — 3 PRs
  { id: 'pr-w3-leo-1', title: 'Add Beacon guided tour component', authorId: 'leo', commenterIds: ['elena', 'bob'], approverId: 'bob', date: '2026-03-16' },
  { id: 'pr-w3-leo-2', title: 'Build contextual help tooltips', authorId: 'leo', commenterIds: ['elena', 'grace'], approverId: 'bob', date: '2026-03-18' },
  { id: 'pr-w3-leo-3', title: 'Add Beacon empty state illustrations', authorId: 'leo', commenterIds: ['elena'], approverId: 'bob', date: '2026-03-20' },

  // =====================
  // WEEK 4: 2026-03-23 to 2026-03-27
  // Alice/Henry fully re-engaged across team
  // Bob bottleneck — 0 own PRs, reviewing 6+
  // Carol declining further
  // David no PRs, disengaged
  // Frank slightly reconnected
  // Grace feeling strain
  // =====================

  // Alice — 4 PRs (re-engaged, now working across projects)
  { id: 'pr-w4-alice-1', title: 'Add API gateway rate limit config', authorId: 'alice', commenterIds: ['grace', 'henry'], approverId: 'alice', date: '2026-03-23' },
  { id: 'pr-w4-alice-2', title: 'Refactor shared auth middleware', authorId: 'alice', commenterIds: ['frank', 'james'], approverId: 'alice', date: '2026-03-24' },
  { id: 'pr-w4-alice-3', title: 'Add Beacon backend API endpoints', authorId: 'alice', commenterIds: ['bob', 'grace'], approverId: 'alice', date: '2026-03-25' },
  { id: 'pr-w4-alice-4', title: 'Improve error handling across services', authorId: 'alice', commenterIds: ['henry', 'leo'], approverId: 'alice', date: '2026-03-27' },

  // Bob — 0 PRs (bottleneck, only reviewing)

  // Carol — 2 PRs (declining)
  { id: 'pr-w4-carol-1', title: 'Fix Beacon dashboard scroll behavior', authorId: 'carol', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-24' },
  { id: 'pr-w4-carol-2', title: 'Update Beacon chart accessibility', authorId: 'carol', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-27' },

  // David — 0 PRs

  // Elena — 5 PRs (fully ramped, now reviewing others too)
  { id: 'pr-w4-elena-1', title: 'Build Beacon dashboard widget system', authorId: 'elena', commenterIds: ['leo', 'bob'], approverId: 'bob', date: '2026-03-23' },
  { id: 'pr-w4-elena-2', title: 'Add Beacon custom report builder', authorId: 'elena', commenterIds: ['leo', 'grace'], approverId: 'bob', date: '2026-03-24' },
  { id: 'pr-w4-elena-3', title: 'Implement Beacon saved views', authorId: 'elena', commenterIds: ['bob', 'iris'], approverId: 'bob', date: '2026-03-25' },
  { id: 'pr-w4-elena-4', title: 'Add Beacon share dashboard feature', authorId: 'elena', commenterIds: ['leo'], approverId: 'bob', date: '2026-03-26' },
  { id: 'pr-w4-elena-5', title: 'Fix Beacon widget resize handles', authorId: 'elena', commenterIds: ['carol', 'bob'], approverId: 'bob', date: '2026-03-27' },

  // Frank — 6 PRs (still high, James approves now)
  { id: 'pr-w4-frank-1', title: 'Add Cipher compliance reporting', authorId: 'frank', commenterIds: ['james'], approverId: 'james', date: '2026-03-23' },
  { id: 'pr-w4-frank-2', title: 'Implement Cipher data encryption', authorId: 'frank', commenterIds: ['james'], approverId: 'james', date: '2026-03-24' },
  { id: 'pr-w4-frank-3', title: 'Build Cipher access review flow', authorId: 'frank', commenterIds: ['james', 'alice'], approverId: 'james', date: '2026-03-25' },
  { id: 'pr-w4-frank-4', title: 'Add Cipher breach detection alerts', authorId: 'frank', commenterIds: ['james'], approverId: 'james', date: '2026-03-25' },
  { id: 'pr-w4-frank-5', title: 'Implement Cipher password policy', authorId: 'frank', commenterIds: [], approverId: 'james', date: '2026-03-26' },
  { id: 'pr-w4-frank-6', title: 'Fix Cipher concurrent session limit', authorId: 'frank', commenterIds: ['james'], approverId: 'james', date: '2026-03-27' },

  // Grace — 2 PRs (output dropping, spread thin)
  { id: 'pr-w4-grace-1', title: 'Add shared component documentation', authorId: 'grace', commenterIds: ['bob', 'elena'], approverId: 'bob', date: '2026-03-24' },
  { id: 'pr-w4-grace-2', title: 'Fix cross-project import issues', authorId: 'grace', commenterIds: ['alice', 'james'], approverId: 'bob', date: '2026-03-26' },

  // Henry — 5 PRs (re-engaged, now on Beacon backend)
  { id: 'pr-w4-henry-1', title: 'Add Beacon data pipeline service', authorId: 'henry', commenterIds: ['alice', 'grace'], approverId: 'alice', date: '2026-03-23' },
  { id: 'pr-w4-henry-2', title: 'Build Beacon aggregation workers', authorId: 'henry', commenterIds: ['alice', 'bob'], approverId: 'alice', date: '2026-03-24' },
  { id: 'pr-w4-henry-3', title: 'Add Beacon metrics caching layer', authorId: 'henry', commenterIds: ['grace'], approverId: 'alice', date: '2026-03-25' },
  { id: 'pr-w4-henry-4', title: 'Implement Beacon data export API', authorId: 'henry', commenterIds: ['alice', 'james'], approverId: 'alice', date: '2026-03-26' },
  { id: 'pr-w4-henry-5', title: 'Fix Beacon query timeout handling', authorId: 'henry', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-27' },

  // Iris — 6 PRs (consistent)
  { id: 'pr-w4-iris-1', title: 'Build Beacon geographic map view', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-23' },
  { id: 'pr-w4-iris-2', title: 'Add Beacon bubble chart', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-24' },
  { id: 'pr-w4-iris-3', title: 'Implement Beacon waterfall chart', authorId: 'iris', commenterIds: ['carol'], approverId: 'bob', date: '2026-03-25' },
  { id: 'pr-w4-iris-4', title: 'Add Beacon chart drill-through', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-25' },
  { id: 'pr-w4-iris-5', title: 'Build Beacon dashboard templates', authorId: 'iris', commenterIds: ['grace'], approverId: 'bob', date: '2026-03-26' },
  { id: 'pr-w4-iris-6', title: 'Fix Beacon chart print styles', authorId: 'iris', commenterIds: ['bob'], approverId: 'bob', date: '2026-03-27' },

  // James — 4 PRs (split across projects)
  { id: 'pr-w4-james-1', title: 'Add Beacon webhook integration', authorId: 'james', commenterIds: ['bob', 'grace'], approverId: 'bob', date: '2026-03-23' },
  { id: 'pr-w4-james-2', title: 'Build Cipher user provisioning API', authorId: 'james', commenterIds: ['frank'], approverId: 'frank', date: '2026-03-24' },
  { id: 'pr-w4-james-3', title: 'Add Cipher group management UI', authorId: 'james', commenterIds: ['frank', 'grace'], approverId: 'frank', date: '2026-03-25' },
  { id: 'pr-w4-james-4', title: 'Implement Beacon SSO callback', authorId: 'james', commenterIds: ['frank', 'bob'], approverId: 'bob', date: '2026-03-27' },

  // Karen — 4 PRs (re-engaging slowly)
  { id: 'pr-w4-karen-1', title: 'Add service health monitoring', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-23' },
  { id: 'pr-w4-karen-2', title: 'Build infrastructure alerting rules', authorId: 'karen', commenterIds: ['alice'], approverId: 'alice', date: '2026-03-24' },
  { id: 'pr-w4-karen-3', title: 'Add deployment status dashboard', authorId: 'karen', commenterIds: ['henry', 'grace'], approverId: 'alice', date: '2026-03-26' },
  { id: 'pr-w4-karen-4', title: 'Fix service discovery configuration', authorId: 'karen', commenterIds: ['alice', 'henry'], approverId: 'alice', date: '2026-03-27' },

  // Leo — 3 PRs
  { id: 'pr-w4-leo-1', title: 'Add Beacon interactive tutorial', authorId: 'leo', commenterIds: ['elena', 'bob'], approverId: 'bob', date: '2026-03-23' },
  { id: 'pr-w4-leo-2', title: 'Build Beacon FAQ section', authorId: 'leo', commenterIds: ['elena', 'grace'], approverId: 'bob', date: '2026-03-25' },
  { id: 'pr-w4-leo-3', title: 'Add Beacon contextual documentation', authorId: 'leo', commenterIds: ['elena'], approverId: 'bob', date: '2026-03-27' },
]

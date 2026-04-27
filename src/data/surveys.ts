import type { SurveyResponse } from './types'

export const surveyResponses: SurveyResponse[] = [
  // =====================
  // WEEK 1: 2026-03-06 (Friday)
  // 80% response rate = ~10 of 12. Iris and Frank skip.
  // =====================

  { employeeId: 'alice', date: '2026-03-06', mood: 4, helpfulColleagues: ['henry', 'karen'], blockers: 'None, Atlas is on track.' },
  { employeeId: 'bob', date: '2026-03-06', mood: 4, helpfulColleagues: ['grace'], blockers: 'Nothing major.' },
  { employeeId: 'carol', date: '2026-03-06', mood: 4, helpfulColleagues: ['bob', 'grace'], blockers: 'Waiting on design specs for a couple of Beacon views.' },
  { employeeId: 'david', date: '2026-03-06', mood: 4, helpfulColleagues: ['bob', 'grace'], blockers: 'Nothing major, getting settled into Beacon backend work.' },
  { employeeId: 'elena', date: '2026-03-06', mood: 3, helpfulColleagues: ['leo', 'grace'], blockers: 'Still getting up to speed on the codebase. Leo has been great.' },
  { employeeId: 'grace', date: '2026-03-06', mood: 5, helpfulColleagues: ['bob', 'james'], blockers: 'None.' },
  { employeeId: 'henry', date: '2026-03-06', mood: 4, helpfulColleagues: ['alice', 'karen'], blockers: 'None, heads-down on Atlas.' },
  { employeeId: 'james', date: '2026-03-06', mood: 4, helpfulColleagues: ['grace', 'bob'], blockers: 'Nothing blocking.' },
  { employeeId: 'karen', date: '2026-03-06', mood: 4, helpfulColleagues: ['alice', 'henry'], blockers: 'None.' },
  { employeeId: 'leo', date: '2026-03-06', mood: 4, helpfulColleagues: ['elena', 'grace'], blockers: 'Nothing blocking.' },

  // =====================
  // WEEK 2: 2026-03-13 (Friday)
  // Iris skips.
  // =====================

  { employeeId: 'alice', date: '2026-03-13', mood: 4, helpfulColleagues: ['henry', 'karen'], blockers: 'Atlas nearing completion. Some flaky tests to sort out.' },
  { employeeId: 'bob', date: '2026-03-13', mood: 4, helpfulColleagues: ['grace', 'iris'], blockers: 'Review queue growing but still manageable.' },
  { employeeId: 'carol', date: '2026-03-13', mood: 4, helpfulColleagues: ['bob', 'iris'], blockers: 'Nothing major.' },
  { employeeId: 'david', date: '2026-03-13', mood: 3, helpfulColleagues: ['grace'], blockers: 'Starting to get pulled into a lot of stakeholder meetings.' },
  { employeeId: 'elena', date: '2026-03-13', mood: 4, helpfulColleagues: ['leo', 'grace'], blockers: 'Feeling more confident. Landed my first solo PRs.' },
  { employeeId: 'frank', date: '2026-03-13', mood: 3, helpfulColleagues: [], blockers: 'Nothing blocking. Working independently.' },
  { employeeId: 'grace', date: '2026-03-13', mood: 5, helpfulColleagues: ['james', 'carol'], blockers: 'None.' },
  { employeeId: 'henry', date: '2026-03-13', mood: 4, helpfulColleagues: ['alice', 'karen'], blockers: 'Atlas push is intense but going well.' },
  { employeeId: 'james', date: '2026-03-13', mood: 4, helpfulColleagues: ['grace', 'bob'], blockers: 'Nothing blocking.' },
  { employeeId: 'karen', date: '2026-03-13', mood: 4, helpfulColleagues: ['alice', 'henry'], blockers: 'None.' },
  { employeeId: 'leo', date: '2026-03-13', mood: 4, helpfulColleagues: ['elena', 'bob'], blockers: 'All good.' },

  // =====================
  // WEEK 3: 2026-03-20 (Friday)
  // Atlas ships! Carol mood drops. Bob starting to feel it. Grace slight dip.
  // Leo skips this week.
  // =====================

  { employeeId: 'alice', date: '2026-03-20', mood: 5, helpfulColleagues: ['henry', 'karen'], blockers: 'Atlas shipped! Feeling great about the team.' },
  { employeeId: 'bob', date: '2026-03-20', mood: 3, helpfulColleagues: ['grace'], blockers: 'Review queue is getting heavy. Hard to find time for my own work.' },
  { employeeId: 'carol', date: '2026-03-20', mood: 3, helpfulColleagues: ['iris'], blockers: 'Stuck on the analytics feature. Requirements keep changing and Iris and I can\'t get clarity.' },
  { employeeId: 'david', date: '2026-03-20', mood: 2, helpfulColleagues: [], blockers: 'Too many meetings. Barely have time to code.' },
  { employeeId: 'elena', date: '2026-03-20', mood: 4, helpfulColleagues: ['leo', 'grace'], blockers: 'Nothing blocking. Feeling productive.' },
  { employeeId: 'frank', date: '2026-03-20', mood: 3, helpfulColleagues: ['james'], blockers: 'James joining Cipher has been helpful for code review.' },
  { employeeId: 'grace', date: '2026-03-20', mood: 3, helpfulColleagues: ['james', 'alice'], blockers: 'Spread across a lot of things. Could use more focus time.' },
  { employeeId: 'henry', date: '2026-03-20', mood: 5, helpfulColleagues: ['alice', 'karen'], blockers: 'Atlas launched. Looking forward to new challenges.' },
  { employeeId: 'iris', date: '2026-03-20', mood: 3, helpfulColleagues: ['carol'], blockers: 'Requirements for the analytics feature are unclear. Carol and I are stuck waiting for direction.' },
  { employeeId: 'james', date: '2026-03-20', mood: 4, helpfulColleagues: ['frank', 'grace'], blockers: 'Ramping up on Cipher codebase. Manageable.' },
  { employeeId: 'karen', date: '2026-03-20', mood: 4, helpfulColleagues: ['alice', 'henry'], blockers: 'Atlas shipped. Figuring out what to work on next.' },

  // =====================
  // WEEK 4: 2026-03-27 (Friday)
  // Bob bottleneck, Carol needs attention, David overwhelmed, Grace strained.
  // =====================

  { employeeId: 'alice', date: '2026-03-27', mood: 4, helpfulColleagues: ['henry', 'grace'], blockers: 'Transitioning to Beacon backend work. Good to be working across the team again.' },
  { employeeId: 'bob', date: '2026-03-27', mood: 2, helpfulColleagues: ['grace'], blockers: 'Completely overwhelmed with reviews. Haven\'t written code in over a week. Need to figure out how to delegate.' },
  { employeeId: 'carol', date: '2026-03-27', mood: 2, helpfulColleagues: ['iris'], blockers: 'No direction on our feature. Iris and I are frustrated. Considering whether this is the right project for me.' },
  { employeeId: 'david', date: '2026-03-27', mood: 1, helpfulColleagues: [], blockers: 'Haven\'t written code in weeks. All my time is consumed by external meetings. Need help.' },
  { employeeId: 'elena', date: '2026-03-27', mood: 5, helpfulColleagues: ['leo', 'bob'], blockers: 'Feeling fully ramped. Leo has been an incredible mentor.' },
  { employeeId: 'frank', date: '2026-03-27', mood: 4, helpfulColleagues: ['james'], blockers: 'Good pace on Cipher. Nice to have James for reviews.' },
  { employeeId: 'grace', date: '2026-03-27', mood: 2, helpfulColleagues: ['alice', 'james'], blockers: 'Spread way too thin. Being pulled into every project. Struggling to get my own work done. Need to set boundaries.' },
  { employeeId: 'henry', date: '2026-03-27', mood: 4, helpfulColleagues: ['alice', 'grace'], blockers: 'Enjoying Beacon work. Good to collaborate with a wider group.' },
  { employeeId: 'iris', date: '2026-03-27', mood: 2, helpfulColleagues: ['carol'], blockers: 'Blocked on decisions for weeks now. Feature is stalled and it\'s demoralizing.' },
  { employeeId: 'james', date: '2026-03-27', mood: 4, helpfulColleagues: ['frank', 'grace'], blockers: 'Balancing two projects is busy but rewarding.' },
  { employeeId: 'karen', date: '2026-03-27', mood: 3, helpfulColleagues: ['alice', 'henry'], blockers: 'Still finding my footing post-Atlas. Would like clearer direction on next priorities.' },
  { employeeId: 'leo', date: '2026-03-27', mood: 5, helpfulColleagues: ['elena'], blockers: 'Elena is fully independent now. Great to see her growth.' },
]

import type { Meeting } from './types'

// All 12 employee IDs for team-wide meetings
const allTeam = ['alice', 'bob', 'carol', 'david', 'elena', 'frank', 'grace', 'henry', 'iris', 'james', 'karen', 'leo']
const atlas = ['alice', 'henry', 'karen']
const beaconCore = ['bob', 'carol', 'elena', 'grace', 'iris', 'james', 'leo']

export const meetings: Meeting[] = [
  // =====================
  // WEEK 1: 2026-03-02 to 2026-03-06
  // =====================

  // Team standup (Mon) — full team
  { id: 'mtg-w1-standup', employeeIds: allTeam, name: 'Team Standup', date: '2026-03-02', durationMins: 30 },

  // Atlas standup (Tue, Thu)
  { id: 'mtg-w1-atlas-1', employeeIds: atlas, name: 'Atlas Standup', date: '2026-03-03', durationMins: 30 },
  { id: 'mtg-w1-atlas-2', employeeIds: atlas, name: 'Atlas Standup', date: '2026-03-05', durationMins: 30 },

  // Beacon standup (Tue, Thu)
  { id: 'mtg-w1-beacon-1', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-03', durationMins: 30 },
  { id: 'mtg-w1-beacon-2', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-05', durationMins: 30 },

  // Alice 1-1s with Atlas members
  { id: 'mtg-w1-alice-henry', employeeIds: ['alice', 'henry'], name: 'Alice / Henry 1-1', date: '2026-03-03', durationMins: 30 },
  { id: 'mtg-w1-alice-karen', employeeIds: ['alice', 'karen'], name: 'Alice / Karen 1-1', date: '2026-03-04', durationMins: 30 },

  // Leo / Elena pairing
  { id: 'mtg-w1-leo-elena', employeeIds: ['leo', 'elena'], name: 'Leo / Elena Pairing', date: '2026-03-02', durationMins: 30 },

  // David's external meetings (long blocks, mostly solo from our team's perspective)
  { id: 'mtg-w1-david-ext-1', employeeIds: ['david'], name: 'Stakeholder Sync', date: '2026-03-02', durationMins: 240 },
  { id: 'mtg-w1-david-ext-2', employeeIds: ['david'], name: 'Cross-Team Planning', date: '2026-03-03', durationMins: 240 },
  { id: 'mtg-w1-david-ext-3', employeeIds: ['david'], name: 'Vendor Review', date: '2026-03-05', durationMins: 240 },

  // Grace cross-project check-in
  { id: 'mtg-w1-grace-cross', employeeIds: ['grace', 'alice', 'bob'], name: 'Cross-Project Sync', date: '2026-03-04', durationMins: 30 },

  // =====================
  // WEEK 2: 2026-03-09 to 2026-03-13
  // =====================

  // Team standup (Mon)
  { id: 'mtg-w2-standup', employeeIds: allTeam, name: 'Team Standup', date: '2026-03-09', durationMins: 30 },

  // Atlas standup (Tue, Thu)
  { id: 'mtg-w2-atlas-1', employeeIds: atlas, name: 'Atlas Standup', date: '2026-03-10', durationMins: 30 },
  { id: 'mtg-w2-atlas-2', employeeIds: atlas, name: 'Atlas Standup', date: '2026-03-12', durationMins: 30 },

  // Beacon standup (Tue, Thu)
  { id: 'mtg-w2-beacon-1', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-10', durationMins: 30 },
  { id: 'mtg-w2-beacon-2', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-12', durationMins: 30 },

  // Alice 1-1s with Atlas members
  { id: 'mtg-w2-alice-henry', employeeIds: ['alice', 'henry'], name: 'Alice / Henry 1-1', date: '2026-03-10', durationMins: 30 },
  { id: 'mtg-w2-alice-karen', employeeIds: ['alice', 'karen'], name: 'Alice / Karen 1-1', date: '2026-03-11', durationMins: 30 },

  // Leo / Elena pairing
  { id: 'mtg-w2-leo-elena', employeeIds: ['leo', 'elena'], name: 'Leo / Elena Pairing', date: '2026-03-09', durationMins: 30 },

  // David's external meetings
  { id: 'mtg-w2-david-ext-1', employeeIds: ['david'], name: 'Stakeholder Sync', date: '2026-03-09', durationMins: 240 },
  { id: 'mtg-w2-david-ext-2', employeeIds: ['david'], name: 'Cross-Team Planning', date: '2026-03-10', durationMins: 240 },
  { id: 'mtg-w2-david-ext-3', employeeIds: ['david'], name: 'Architecture Review', date: '2026-03-12', durationMins: 240 },

  // Grace cross-project check-in
  { id: 'mtg-w2-grace-cross', employeeIds: ['grace', 'alice', 'bob'], name: 'Cross-Project Sync', date: '2026-03-11', durationMins: 30 },

  // =====================
  // WEEK 3: 2026-03-16 to 2026-03-20
  // Atlas ships — trio starts re-engaging
  // James bridges into Cipher
  // =====================

  // Team standup (Mon)
  { id: 'mtg-w3-standup', employeeIds: allTeam, name: 'Team Standup', date: '2026-03-16', durationMins: 30 },

  // Atlas wrap-up (just one this week — winding down)
  { id: 'mtg-w3-atlas-1', employeeIds: atlas, name: 'Atlas Retro', date: '2026-03-17', durationMins: 30 },

  // Beacon standup (Tue, Thu)
  { id: 'mtg-w3-beacon-1', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-17', durationMins: 30 },
  { id: 'mtg-w3-beacon-2', employeeIds: beaconCore, name: 'Beacon Standup', date: '2026-03-19', durationMins: 30 },

  // Cipher standup starts (James joins Frank)
  { id: 'mtg-w3-cipher-1', employeeIds: ['frank', 'james'], name: 'Cipher Standup', date: '2026-03-18', durationMins: 30 },

  // Alice starts broader engagement — attends Beacon standup
  { id: 'mtg-w3-alice-beacon', employeeIds: ['alice', 'bob', 'grace'], name: 'Backend/Frontend Sync', date: '2026-03-18', durationMins: 30 },

  // Alice 1-1s continue with Atlas but also adds one with Bob
  { id: 'mtg-w3-alice-henry', employeeIds: ['alice', 'henry'], name: 'Alice / Henry 1-1', date: '2026-03-17', durationMins: 30 },
  { id: 'mtg-w3-alice-karen', employeeIds: ['alice', 'karen'], name: 'Alice / Karen 1-1', date: '2026-03-18', durationMins: 30 },

  // Leo / Elena pairing
  { id: 'mtg-w3-leo-elena', employeeIds: ['leo', 'elena'], name: 'Leo / Elena Pairing', date: '2026-03-16', durationMins: 30 },

  // David's external meetings (still heavy)
  { id: 'mtg-w3-david-ext-1', employeeIds: ['david'], name: 'Stakeholder Sync', date: '2026-03-16', durationMins: 240 },
  { id: 'mtg-w3-david-ext-2', employeeIds: ['david'], name: 'Budget Review', date: '2026-03-17', durationMins: 240 },
  { id: 'mtg-w3-david-ext-3', employeeIds: ['david'], name: 'Cross-Team Planning', date: '2026-03-19', durationMins: 240 },

  // Grace cross-project (now including James bridging)
  { id: 'mtg-w3-grace-cross', employeeIds: ['grace', 'james', 'frank'], name: 'Cross-Project Sync', date: '2026-03-18', durationMins: 30 },

  // =====================
  // WEEK 4: 2026-03-23 to 2026-03-27
  // Atlas trio fully re-engaged
  // Bob bottlenecked
  // Frank slightly reconnected
  // Grace feeling strain
  // =====================

  // Team standup (Mon)
  { id: 'mtg-w4-standup', employeeIds: allTeam, name: 'Team Standup', date: '2026-03-23', durationMins: 30 },

  // No more Atlas standups — project shipped

  // Beacon standup (Tue, Thu) — bigger now with Alice/Henry joining
  { id: 'mtg-w4-beacon-1', employeeIds: [...beaconCore, 'alice', 'henry'], name: 'Beacon Standup', date: '2026-03-24', durationMins: 30 },
  { id: 'mtg-w4-beacon-2', employeeIds: [...beaconCore, 'alice', 'henry'], name: 'Beacon Standup', date: '2026-03-26', durationMins: 30 },

  // Cipher standup (Frank + James)
  { id: 'mtg-w4-cipher-1', employeeIds: ['frank', 'james'], name: 'Cipher Standup', date: '2026-03-24', durationMins: 30 },
  { id: 'mtg-w4-cipher-2', employeeIds: ['frank', 'james'], name: 'Cipher Standup', date: '2026-03-26', durationMins: 30 },

  // Alice broader 1-1s — now meeting with Bob and Carol too
  { id: 'mtg-w4-alice-henry', employeeIds: ['alice', 'henry'], name: 'Alice / Henry 1-1', date: '2026-03-24', durationMins: 30 },
  { id: 'mtg-w4-alice-karen', employeeIds: ['alice', 'karen'], name: 'Alice / Karen 1-1', date: '2026-03-25', durationMins: 30 },
  { id: 'mtg-w4-alice-bob', employeeIds: ['alice', 'bob'], name: 'Alice / Bob 1-1', date: '2026-03-23', durationMins: 30 },

  // Leo / Elena pairing
  { id: 'mtg-w4-leo-elena', employeeIds: ['leo', 'elena'], name: 'Leo / Elena Pairing', date: '2026-03-23', durationMins: 30 },

  // David's external meetings (still heavy, now disengaging from team)
  { id: 'mtg-w4-david-ext-1', employeeIds: ['david'], name: 'Stakeholder Sync', date: '2026-03-23', durationMins: 240 },
  { id: 'mtg-w4-david-ext-2', employeeIds: ['david'], name: 'Cross-Team Planning', date: '2026-03-24', durationMins: 240 },
  { id: 'mtg-w4-david-ext-3', employeeIds: ['david'], name: 'Quarterly Review', date: '2026-03-25', durationMins: 240 },
  { id: 'mtg-w4-david-ext-4', employeeIds: ['david'], name: 'Vendor Negotiation', date: '2026-03-26', durationMins: 240 },

  // Grace cross-project — still doing it but feeling the load
  { id: 'mtg-w4-grace-cross', employeeIds: ['grace', 'james', 'frank'], name: 'Cross-Project Sync', date: '2026-03-25', durationMins: 30 },
  { id: 'mtg-w4-grace-bob', employeeIds: ['grace', 'bob'], name: 'Grace / Bob Check-in', date: '2026-03-24', durationMins: 30 },

  // Frank attends a couple more meetings (slight reconnection)
  { id: 'mtg-w4-frank-alice', employeeIds: ['frank', 'alice'], name: 'Frank / Alice Sync', date: '2026-03-25', durationMins: 30 },
]

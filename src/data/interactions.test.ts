import { describe, it, expect } from 'vitest'
import { computeInteractions, DEFAULT_WEIGHTS } from './interactions'
import type { InteractionWeights } from './interactions'

function findLink(links: { source: string; target: string; weight: number }[], a: string, b: string) {
  const key = [a, b].sort()
  return links.find(
    (l) => {
      const lk = [l.source, l.target].sort()
      return lk[0] === key[0] && lk[1] === key[1]
    },
  )
}

function linksFor(links: { source: string; target: string }[], id: string) {
  return links.filter((l) => l.source === id || l.target === id)
}

describe('computeInteractions', () => {
  it('returns links with weights between 0 and max possible', () => {
    const links = computeInteractions(1, DEFAULT_WEIGHTS, 0)
    for (const link of links) {
      expect(link.weight).toBeGreaterThanOrEqual(0)
    }
  })

  it('Atlas trio (Alice/Henry/Karen) have strong connections in week 1', () => {
    const links = computeInteractions(1, DEFAULT_WEIGHTS, 0)
    const aliceHenry = findLink(links, 'alice', 'henry')
    const aliceKaren = findLink(links, 'alice', 'karen')
    const henryKaren = findLink(links, 'henry', 'karen')

    expect(aliceHenry).toBeDefined()
    expect(aliceKaren).toBeDefined()
    expect(henryKaren).toBeDefined()

    // These should be among the strongest connections
    expect(aliceHenry!.weight).toBeGreaterThan(1)
    expect(aliceKaren!.weight).toBeGreaterThan(1)
  })

  it('Frank has minimal connections in week 1 (lone wolf)', () => {
    const links = computeInteractions(1, DEFAULT_WEIGHTS, 0.5)
    const frankLinks = linksFor(links, 'frank')

    // Frank self-approves and has no commenters — should have very few connections
    // Only team standup meeting creates weak links
    expect(frankLinks.length).toBeLessThanOrEqual(2)
  })

  it('Grace is broadly connected', () => {
    const links = computeInteractions(1, DEFAULT_WEIGHTS, 0)
    const graceLinks = linksFor(links, 'grace')

    // Grace comments on many PRs, attends cross-project meetings, mentioned as helpful
    expect(graceLinks.length).toBeGreaterThanOrEqual(6)
  })

  it('minWeight filtering removes weak links', () => {
    const allLinks = computeInteractions(1, DEFAULT_WEIGHTS, 0)
    const filteredLinks = computeInteractions(1, DEFAULT_WEIGHTS, 1.0)

    expect(filteredLinks.length).toBeLessThan(allLinks.length)
    for (const link of filteredLinks) {
      expect(link.weight).toBeGreaterThanOrEqual(1.0)
    }
  })

  it('custom weights change output scores', () => {
    const meetingsOnly: InteractionWeights = { meeting: 1, prComment: 0, prApproval: 0, surveyMention: 0 }
    const surveyOnly: InteractionWeights = { meeting: 0, prComment: 0, prApproval: 0, surveyMention: 2 }

    const meetingLinks = computeInteractions(1, meetingsOnly, 0.01)
    const surveyLinks = computeInteractions(1, surveyOnly, 0.01)

    // With meetings only, Frank should have links (team standup)
    const frankMeetingLinks = linksFor(meetingLinks, 'frank')
    expect(frankMeetingLinks.length).toBeGreaterThan(0)

    // With survey only, nobody mentions Frank in week 1 — no survey links
    const frankSurveyLinks = linksFor(surveyLinks, 'frank')
    expect(frankSurveyLinks.length).toBe(0)
  })

  it('normalization produces max 1.0 per category component', () => {
    // With only one factor at weight 1, max possible output = 1.0
    const meetingsOnly: InteractionWeights = { meeting: 1, prComment: 0, prApproval: 0, surveyMention: 0 }
    const links = computeInteractions(1, meetingsOnly, 0)

    const maxWeight = Math.max(...links.map((l) => l.weight))
    expect(maxWeight).toBeCloseTo(1.0, 5)
  })

  it('week 4 shows different structure than week 1', () => {
    const w1 = computeInteractions(1, DEFAULT_WEIGHTS, 0.5)
    const w4 = computeInteractions(4, DEFAULT_WEIGHTS, 0.5)

    // James should have Cipher connections in week 4 but not week 1
    const jamesFrankW1 = findLink(w1, 'james', 'frank')
    const jamesFrankW4 = findLink(w4, 'james', 'frank')

    // Week 1: James and Frank only share team standup
    // Week 4: James reviews Frank's PRs and they have Cipher standups
    if (jamesFrankW1) {
      expect(jamesFrankW4!.weight).toBeGreaterThan(jamesFrankW1.weight)
    } else {
      expect(jamesFrankW4).toBeDefined()
    }
  })
})

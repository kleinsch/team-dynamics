import { getMeetings, getPullRequests, getSurveys } from './index'

export interface InteractionWeights {
  meeting: number
  prComment: number
  prApproval: number
  surveyMention: number
}

export const DEFAULT_WEIGHTS: InteractionWeights = {
  meeting: 1,
  prComment: 0.5,
  prApproval: 0.25,
  surveyMention: 2,
}

export interface InteractionLink {
  source: string
  target: string
  weight: number
}

interface RawCounts {
  meetings: number
  prComments: number
  prApprovals: number
  surveyMentions: number
}

function pairKey(a: string, b: string): string {
  return [a, b].sort().join('::')
}

function getRawCounts(week: number): Map<string, RawCounts> {
  const meetings = getMeetings(week)
  const prs = getPullRequests(week)
  const surveys = getSurveys(week)

  const pairMap = new Map<string, RawCounts>()

  function getOrCreate(key: string): RawCounts {
    let counts = pairMap.get(key)
    if (!counts) {
      counts = { meetings: 0, prComments: 0, prApprovals: 0, surveyMentions: 0 }
      pairMap.set(key, counts)
    }
    return counts
  }

  for (const mtg of meetings) {
    const ids = mtg.employeeIds
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        getOrCreate(pairKey(ids[i], ids[j])).meetings++
      }
    }
  }

  for (const pr of prs) {
    for (const c of pr.commenterIds) {
      if (c !== pr.authorId) {
        getOrCreate(pairKey(pr.authorId, c)).prComments++
      }
    }
    if (pr.approverId !== pr.authorId) {
      getOrCreate(pairKey(pr.authorId, pr.approverId)).prApprovals++
    }
  }

  for (const s of surveys) {
    for (const h of s.helpfulColleagues) {
      if (h !== s.employeeId) {
        getOrCreate(pairKey(s.employeeId, h)).surveyMentions++
      }
    }
  }

  return pairMap
}

export function computeInteractions(
  week: number,
  weights: InteractionWeights = DEFAULT_WEIGHTS,
  minWeight: number = 0.5,
): InteractionLink[] {
  const rawMap = getRawCounts(week)

  // Find max values for normalization
  let maxMeetings = 0
  let maxComments = 0
  let maxApprovals = 0
  let maxSurvey = 0

  for (const counts of rawMap.values()) {
    if (counts.meetings > maxMeetings) maxMeetings = counts.meetings
    if (counts.prComments > maxComments) maxComments = counts.prComments
    if (counts.prApprovals > maxApprovals) maxApprovals = counts.prApprovals
    if (counts.surveyMentions > maxSurvey) maxSurvey = counts.surveyMentions
  }

  const links: InteractionLink[] = []

  for (const [key, counts] of rawMap) {
    const meetingNorm = maxMeetings > 0 ? counts.meetings / maxMeetings : 0
    const commentNorm = maxComments > 0 ? counts.prComments / maxComments : 0
    const approvalNorm = maxApprovals > 0 ? counts.prApprovals / maxApprovals : 0
    const surveyNorm = maxSurvey > 0 ? counts.surveyMentions / maxSurvey : 0

    const weight =
      meetingNorm * weights.meeting +
      commentNorm * weights.prComment +
      approvalNorm * weights.prApproval +
      surveyNorm * weights.surveyMention

    if (weight >= minWeight) {
      const [source, target] = key.split('::')
      links.push({ source, target, weight })
    }
  }

  return links
}

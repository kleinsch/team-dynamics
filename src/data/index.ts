import { employees } from './employees'
import { meetings } from './meetings'
import { pullRequests } from './pull-requests'
import { surveyResponses } from './surveys'
import type { Meeting, PullRequest, SurveyResponse } from './types'

export { employees }
export type { Employee, Meeting, PullRequest, SurveyResponse } from './types'

const weekRanges: Record<number, { start: string; end: string }> = {
  1: { start: '2026-03-02', end: '2026-03-06' },
  2: { start: '2026-03-09', end: '2026-03-13' },
  3: { start: '2026-03-16', end: '2026-03-20' },
  4: { start: '2026-03-23', end: '2026-03-27' },
}

function inWeek(date: string, week: number): boolean {
  const range = weekRanges[week]
  if (!range) return false
  return date >= range.start && date <= range.end
}

export function getMeetings(week: number): Meeting[] {
  return meetings.filter((m) => inWeek(m.date, week))
}

export function getPullRequests(week: number): PullRequest[] {
  return pullRequests.filter((pr) => inWeek(pr.date, week))
}

export function getSurveys(week: number): SurveyResponse[] {
  return surveyResponses.filter((s) => inWeek(s.date, week))
}

export function getMeetingsThrough(week: number): Meeting[] {
  return meetings.filter((m) => {
    for (let w = 1; w <= week; w++) {
      if (inWeek(m.date, w)) return true
    }
    return false
  })
}

export function getPullRequestsThrough(week: number): PullRequest[] {
  return pullRequests.filter((pr) => {
    for (let w = 1; w <= week; w++) {
      if (inWeek(pr.date, w)) return true
    }
    return false
  })
}

export function getSurveysThrough(week: number): SurveyResponse[] {
  return surveyResponses.filter((s) => {
    for (let w = 1; w <= week; w++) {
      if (inWeek(s.date, w)) return true
    }
    return false
  })
}

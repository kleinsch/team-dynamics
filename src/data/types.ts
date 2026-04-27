export interface Employee {
  id: string
  name: string
  title: string
}

export interface Meeting {
  id: string
  employeeIds: string[]
  name: string
  date: string
  durationMins: number
}

export interface PullRequest {
  id: string
  title: string
  authorId: string
  commenterIds: string[]
  approverId: string
  date: string
}

export interface SurveyResponse {
  employeeId: string
  date: string
  mood: number
  helpfulColleagues: string[]
  blockers: string
}

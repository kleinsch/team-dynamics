import { employees } from '../../src/data/employees'
import { meetings } from '../../src/data/meetings'
import { pullRequests } from '../../src/data/pull-requests'
import { surveyResponses } from '../../src/data/surveys'

interface Env {
  ANTHROPIC_API_KEY: string
}

const weekRanges: Record<number, { start: string; end: string }> = {
  1: { start: '2026-03-02', end: '2026-03-06' },
  2: { start: '2026-03-09', end: '2026-03-13' },
  3: { start: '2026-03-16', end: '2026-03-20' },
  4: { start: '2026-03-23', end: '2026-03-27' },
}

function throughWeek(date: string, week: number): boolean {
  for (let w = 1; w <= week; w++) {
    const range = weekRanges[w]
    if (range && date >= range.start && date <= range.end) return true
  }
  return false
}

function buildPrompt(week: number, managementStyle: string): string {
  const mtgs = meetings.filter((m) => throughWeek(m.date, week))
  const prs = pullRequests.filter((pr) => throughWeek(pr.date, week))
  const surveys = surveyResponses.filter((s) => throughWeek(s.date, week))

  return `You are an AI assistant helping an engineering manager understand their team dynamics. Analyze the data below and provide actionable insights.

## Manager's Style and Goals
${managementStyle}

## Team Data (through week ${week})

### Employees
${JSON.stringify(employees, null, 2)}

### Meetings
${JSON.stringify(mtgs, null, 2)}

### Pull Requests
${JSON.stringify(prs, null, 2)}

### Survey Responses
${JSON.stringify(surveys, null, 2)}

## Instructions
Based on this data, provide your analysis as JSON with exactly this structure:
{
  "positives": [
    { "title": "short title", "detail": "1-2 sentence explanation" }
  ],
  "hotspots": [
    { "title": "short title", "detail": "1-2 sentence explanation" }
  ],
  "attentionScores": [
    { "employeeId": "alice", "score": 1, "reason": "brief reason" }
  ]
}

Rules:
- positives: exactly 3 positive team dynamics
- hotspots: exactly 3 areas of concern or things to investigate
- attentionScores: one entry per employee (all 12), score 1-5 where 1=doing great and 5=needs immediate attention
- Tailor your analysis to the manager's style and goals
- Be specific — reference actual data patterns, not generic advice
- Return ONLY valid JSON, no markdown or explanation outside the JSON`
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { week, managementStyle } = await context.request.json() as {
    week: number
    managementStyle: string
  }

  if (!week || week < 1 || week > 4) {
    return new Response(JSON.stringify({ error: 'Invalid week' }), { status: 400 })
  }

  const apiKey = context.env.ANTHROPIC_API_KEY
  if (!apiKey || apiKey === 'placeholder-set-your-key-here') {
    return new Response(JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }), { status: 500 })
  }

  const prompt = buildPrompt(week, managementStyle || '')

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    return new Response(JSON.stringify({ error: `Anthropic API error: ${response.status}`, detail: text }), {
      status: 502,
    })
  }

  const result = await response.json() as {
    content: { type: string; text: string }[]
  }

  const rawText = result.content[0]?.text ?? ''
  const text = rawText.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '')

  try {
    const insights = JSON.parse(text)
    return new Response(JSON.stringify(insights), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to parse AI response', raw: text }), {
      status: 502,
    })
  }
}

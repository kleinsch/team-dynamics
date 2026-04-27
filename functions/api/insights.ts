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

function formatEmployees(): string {
  // id|name|title
  return employees.map((e) => `${e.id}|${e.name}|${e.title}`).join('\n')
}

function formatMeetings(week: number): string {
  // date|name|attendees|duration
  return meetings
    .filter((m) => throughWeek(m.date, week))
    .map((m) => `${m.date}|${m.name}|${m.employeeIds.join(',')}|${m.durationMins}m`)
    .join('\n')
}

function formatPRs(week: number): string {
  // date|title|author|commenters|approver
  return pullRequests
    .filter((pr) => throughWeek(pr.date, week))
    .map((pr) => `${pr.date}|${pr.title}|${pr.authorId}|${pr.commenterIds.join(',') || '-'}|${pr.approverId}`)
    .join('\n')
}

function formatSurveys(week: number): string {
  // date|employee|mood|helpful|blocker
  return surveyResponses
    .filter((s) => throughWeek(s.date, week))
    .map((s) => `${s.date}|${s.employeeId}|${s.mood}/5|helped by:${s.helpfulColleagues.join(',') || 'none'}|${s.blockers}`)
    .join('\n')
}

function buildPrompt(week: number, managementStyle: string): string {
  return `Analyze this engineering team's data and provide insights. Be concise.

Manager: ${managementStyle}

EMPLOYEES (id|name|title):
${formatEmployees()}

MEETINGS through week ${week} (date|name|attendees|duration):
${formatMeetings(week)}

PRS through week ${week} (date|title|author|commenters|approver):
${formatPRs(week)}

SURVEYS through week ${week} (date|employee|mood|helpful|blocker):
${formatSurveys(week)}

Return ONLY JSON:
{"positives":[{"title":"...","detail":"..."}],"hotspots":[{"title":"...","detail":"..."}]}

Rules:
- Exactly 3 positives, exactly 3 hotspots
- detail: ONE sentence max, reference specific data
- Tailor to manager's style
- No markdown, ONLY JSON`
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
      max_tokens: 1024,
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
  // Strip markdown fences and find the JSON object
  const cleaned = rawText.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?```\s*$/, '')
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/)
  const text = jsonMatch ? jsonMatch[0] : cleaned

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

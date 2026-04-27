import { useRef, useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { employees, getMeetings, getPullRequests, getSurveys, DEFAULT_WEIGHTS } from '@/data'
import type { InteractionWeights } from '@/data'
import NetworkGraph from '@/components/NetworkGraph'
import { useInsights } from '@/hooks/useInsights'
import type { InsightsResult } from '@/hooks/useInsights'
import { useManagementStyle } from '@/hooks/useManagementStyle'

function useEmployeeStats(week: number) {
  const meetings = getMeetings(week)
  const prs = getPullRequests(week)
  const surveys = getSurveys(week)

  return employees.map((emp) => {
    const meetingCount = meetings.filter((m) => m.employeeIds.includes(emp.id)).length
    const meetingMins = meetings
      .filter((m) => m.employeeIds.includes(emp.id))
      .reduce((sum, m) => sum + m.durationMins, 0)
    const prsAuthored = prs.filter((pr) => pr.authorId === emp.id).length
    const prsReviewed = prs.filter((pr) => pr.commenterIds.includes(emp.id)).length
    const survey = surveys.find((s) => s.employeeId === emp.id)

    return {
      employee: emp,
      meetingCount,
      meetingMins,
      prsAuthored,
      prsReviewed,
      mood: survey?.mood ?? null,
      blockers: survey?.blockers ?? null,
      helpfulColleagues: survey?.helpfulColleagues ?? [],
    }
  })
}

function MoodIndicator({ mood }: { mood: number | null }) {
  if (mood === null) return <span className="text-muted-foreground text-xs">No survey</span>
  const colors: Record<number, string> = {
    1: 'bg-red-500',
    2: 'bg-orange-400',
    3: 'bg-yellow-400',
    4: 'bg-lime-400',
    5: 'bg-green-500',
  }
  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-2.5 h-2.5 rounded-full ${colors[mood]}`} />
      <span className="text-sm">{mood}/5</span>
    </div>
  )
}

function TeamMemberCard({ stat }: { stat: ReturnType<typeof useEmployeeStats>[number] }) {
  const { employee, meetingCount, meetingMins, prsAuthored, prsReviewed, mood, blockers, helpfulColleagues } = stat

  return (
    <Link
      to={`/team/${employee.id}`}
      className="block rounded-lg border bg-card p-4 hover:border-foreground/20 transition-colors"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium">{employee.name}</h3>
          <p className="text-sm text-muted-foreground">{employee.title}</p>
        </div>
        <MoodIndicator mood={mood} />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <Stat label="PRs" value={prsAuthored} />
        <Stat label="Reviews" value={prsReviewed} />
        <Stat label="Meetings" value={meetingCount} detail={`${Math.round(meetingMins / 60)}h`} />
      </div>
      {blockers && (
        <p className="mt-3 text-xs text-muted-foreground line-clamp-2">
          <span className="font-medium text-foreground">Blockers: </span>{blockers}
        </p>
      )}
      {helpfulColleagues.length > 0 && (
        <p className="mt-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Helped by: </span>
          {helpfulColleagues.map((id) => employees.find((e) => e.id === id)?.name.split(' ')[0] ?? id).join(', ')}
        </p>
      )}
    </Link>
  )
}

function Stat({ label, value, detail }: { label: string; value: number; detail?: string }) {
  return (
    <div>
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="font-medium">
        {value}
        {detail && <span className="text-muted-foreground font-normal text-xs ml-1">({detail})</span>}
      </div>
    </div>
  )
}

function useContainerSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) {
        setSize({
          width: Math.floor(entry.contentRect.width),
          height: Math.floor(entry.contentRect.height),
        })
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return size
}

function InsightsPanel({ data, loading, error, refresh }: {
  data: InsightsResult | null
  loading: boolean
  error: string | null
  refresh: () => void
}) {
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-6">
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-muted rounded w-48" />
          <div className="h-3 bg-muted rounded w-full" />
          <div className="h-3 bg-muted rounded w-3/4" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-destructive">Failed to load insights: {error}</p>
        <button
          onClick={refresh}
          className="mt-2 text-sm text-primary hover:underline"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-medium text-green-600 mb-3">Positive Dynamics</h3>
        <ul className="space-y-2">
          {data.positives.map((p, i) => (
            <li key={i}>
              <div className="text-sm font-medium">{p.title}</div>
              <div className="text-xs text-muted-foreground">{p.detail}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <h3 className="font-medium text-orange-500 mb-3">Hotspots</h3>
        <ul className="space-y-2">
          {data.hotspots.map((h, i) => (
            <li key={i}>
              <div className="text-sm font-medium">{h.title}</div>
              <div className="text-xs text-muted-foreground">{h.detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const FACTOR_LABELS = [
  { key: 'meetings' as const, label: 'Meetings' },
  { key: 'prs' as const, label: 'PRs' },
  { key: 'surveys' as const, label: 'Surveys' },
]

export default function Home({ week }: { week: number }) {
  const stats = useEmployeeStats(week)
  const { style: managementStyle } = useManagementStyle()
  const { data: insights, loading, error, refresh } = useInsights(week, managementStyle)
  const graphContainerRef = useRef<HTMLDivElement>(null)
  const { width: graphWidth, height: graphHeight } = useContainerSize(graphContainerRef)

  const [enabledFactors, setEnabledFactors] = useState({
    meetings: true,
    prs: true,
    surveys: true,
  })
  const [minWeight, setMinWeight] = useState(0.5)

  const weights: InteractionWeights = useMemo(() => ({
    meeting: enabledFactors.meetings ? DEFAULT_WEIGHTS.meeting : 0,
    prComment: enabledFactors.prs ? DEFAULT_WEIGHTS.prComment : 0,
    prApproval: enabledFactors.prs ? DEFAULT_WEIGHTS.prApproval : 0,
    surveyMention: enabledFactors.surveys ? DEFAULT_WEIGHTS.surveyMention : 0,
  }), [enabledFactors])

  function toggleFactor(key: 'meetings' | 'prs' | 'surveys') {
    setEnabledFactors((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="p-6 space-y-6">
      <InsightsPanel data={insights} loading={loading} error={error} refresh={refresh} />

      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <TeamMemberCard
                key={stat.employee.id}
                stat={stat}
              />
            ))}
          </div>
        </div>

        <div className="w-[420px] shrink-0">
          <div className="rounded-lg border bg-card sticky top-6">
            <div className="flex items-center gap-2 px-3 py-2 border-b text-sm">
              <span className="font-medium">Interactions</span>
              {FACTOR_LABELS.map(({ key, label }) => (
                <label key={key} className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabledFactors[key]}
                    onChange={() => toggleFactor(key)}
                    className="rounded"
                  />
                  {label}
                </label>
              ))}
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={minWeight}
                onChange={(e) => setMinWeight(parseFloat(e.target.value))}
                className="w-16"
              />
            </div>
            <div ref={graphContainerRef} className="aspect-square">
              <NetworkGraph
                week={week}
                width={graphWidth}
                height={graphHeight}
                weights={weights}
                minWeight={minWeight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

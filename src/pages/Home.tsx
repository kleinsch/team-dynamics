import { Link } from 'react-router-dom'
import { employees, getMeetings, getPullRequests, getSurveys } from '@/data'

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
  const { employee, meetingCount, meetingMins, prsAuthored, prsReviewed, mood } = stat

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

export default function Home({ week }: { week: number }) {
  const stats = useEmployeeStats(week)

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <TeamMemberCard key={stat.employee.id} stat={stat} />
        ))}
      </div>
    </div>
  )
}

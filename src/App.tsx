import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home'
import TeamMember from '@/pages/TeamMember'
import Settings from '@/pages/Settings'

const WEEKS = [1, 2, 3, 4] as const

export default function App() {
  const [currentWeek, setCurrentWeek] = useState(1)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b px-6 py-3 flex items-center gap-6">
        <Link to="/" className="font-semibold text-lg">
          Team Dynamics
        </Link>
        <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">
          Settings
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Week</span>
          {WEEKS.map((w) => (
            <button
              key={w}
              onClick={() => setCurrentWeek(w)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                w === currentWeek
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home week={currentWeek} />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

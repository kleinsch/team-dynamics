import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home'
import Settings from '@/pages/Settings'

const WEEKS = [1, 2, 3, 4] as const

export default function App() {
  const [currentWeek, setCurrentWeek] = useState(1)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b px-4 sm:px-6 py-3 flex items-center gap-3 sm:gap-6">
        <Link to="/" className="font-semibold text-lg shrink-0">
          Team Dynamics
        </Link>
        <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground shrink-0">
          Settings
        </Link>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <span className="text-sm text-muted-foreground hidden sm:inline">Week</span>
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
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

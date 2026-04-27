import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/pages/Home'
import TeamMember from '@/pages/TeamMember'
import Settings from '@/pages/Settings'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b px-6 py-3 flex items-center gap-6">
        <Link to="/" className="font-semibold text-lg">
          Team Dynamics
        </Link>
        <Link to="/settings" className="text-sm text-muted-foreground hover:text-foreground">
          Settings
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

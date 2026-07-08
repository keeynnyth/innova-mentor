import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navigation/Navbar'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentStreak={5} />
      <main className="w-full max-w-5xl mx-auto px-4 pt-6 pb-20 md:pb-6">
        <Outlet />
      </main>
    </div>
  )
}
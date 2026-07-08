import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'

import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword'
import Mentor from '../pages/Mentor/Mentor'
import Goals from '../pages/Goals/Goals'
import Challenges from '../pages/Challenges/Challenges'
import Time from '../pages/Time/Time'
import Interests from '../pages/Interests/Interests'
import Ready from '../pages/Ready/Ready'
import Dashboard from '../pages/Dashboard/Dashboard'
import { Profile } from '../pages/Profile/Profile'

import ProtectedRoute from '../components/auth/ProtectedRoute'
import PublicRoute from '../components/auth/PublicRoute'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas públicas — sin navbar */}
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/recuperar-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

        {/* Rutas protegidas — con navbar */}
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/mentor"      element={<Mentor />} />
          <Route path="/objetivos"   element={<Goals />} />
          <Route path="/desafios"    element={<Challenges />} />
          <Route path="/tiempo"      element={<Time />} />
          <Route path="/intereses"   element={<Interests />} />
          <Route path="/listo"       element={<Ready />} />
          <Route path="/mi-recorrido" element={<Dashboard />} />
          <Route path="/perfil"      element={<Profile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
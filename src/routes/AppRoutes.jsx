import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Mentor from "../pages/Mentor/Mentor";
import Goals from "../pages/Goals/Goals";
import Challenges from "../pages/Challenges/Challenges";
import Reto from "../pages/Challenges/Retos";
import Time from "../pages/Time/Time";
import Interests from "../pages/Interests/Interests";
import Ready from "../pages/Ready/Ready";
import Dashboard from "../pages/Dashboard/Dashboard";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Racha from "../pages/Racha/Racha";
// 1. Importamos el nuevo componente de Progreso
import ProgresoGeneral from "../pages/Progress/ProgresoGeneral";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicRoute from "../components/auth/PublicRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="/registro"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/recuperar-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        <Route
          path="/mentor"
          element={
            <ProtectedRoute>
              <Mentor />
            </ProtectedRoute>
          }
        />

        <Route
          path="/objetivos"
          element={
            <ProtectedRoute>
              <Goals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/desafios"
          element={            
            <ProtectedRoute>
              <Challenges />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tiempo"
          element={
            <ProtectedRoute>
              <Time />
            </ProtectedRoute>
          }
        />

        <Route
          path="/intereses"
          element={
            <ProtectedRoute>
              <Interests />
            </ProtectedRoute>
          }
        />

        <Route
          path="/listo"
          element={
            <ProtectedRoute>
              <Ready />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mi-recorrido"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reto"
          element={
            <ProtectedRoute>
              <Reto desafios={5} /> 
            </ProtectedRoute>            
          }
        />

        {/* Nueva ruta protegida para gestionar el flujo de la Racha y sus metas */}
        <Route
          path="/racha"
          element={
            <ProtectedRoute>
              <Racha />
            </ProtectedRoute>
          }
        />

        {/* 2. Añadimos la ruta protegida para el Progreso General */}
        <Route
          path="/progreso"
          element={
            <ProtectedRoute>
              <ProgresoGeneral />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;


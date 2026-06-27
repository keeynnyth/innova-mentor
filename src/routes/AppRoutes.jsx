
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Mentor from "../pages/Mentor/Mentor";
import Goals from "../pages/Goals/Goals";
import Challenges from "../pages/Challenges/Challenges";
import Time from "../pages/Time/Time";
import Interests from "../pages/Interests/Interests";
import Ready from "../pages/Ready/Ready";
import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/registro" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/mentor" element={<Mentor />} />

        <Route path="/objetivos" element={<Goals />} />

        <Route path="/desafios" element={<Challenges />} />

        <Route path="/tiempo" element={<Time />} />

        <Route path="/intereses" element={<Interests />} />

        <Route path="/listo" element={<Ready />} />

        <Route
          path="/mi-recorrido"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
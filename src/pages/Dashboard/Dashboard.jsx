import React, { useState, useEffect } from 'react'; // Agregamos useState y useEffect para controlar la simulación
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/common/PrimaryButton/PrimaryButton';

import { Link } from "react-router-dom";

import "./Dashboard.css";

import avatarNova from "/branding/Avatar-Nova-Estrella.png";

import useDashboard from "../../hooks/useDashboard";

import { generateChallenge } from "../../services/challenges/challengeGenerator";

import Racha from "../Racha/Racha.jsx";
import RachaNuevaView from "../Racha/RachaNuevaView.jsx"; // Importamos el componente para la simulación
import { ProgresoSemanal } from '../../components/common/ProgressCards/ProgresoSemanal'; 

function Dashboard() {

  const navigate = useNavigate();

  const {
    currentUser,
    userProfile,
    loading,
    handleLogout,
  } = useDashboard();

  // 🧪 SIMULACIÓN: Cambia a 'true' para forzar que aparezca la vista de Racha Nueva, o déjalo en la lógica automática
  const [mostrarNuevaRacha, setMostrarNuevaRacha] = useState(false);

  useEffect(() => {
    if (!loading && userProfile) {
      // MODO SIMULACIÓN MANUAL: Forzamos la aparición para probar los estilos tipo Duolingo
      // Cuando termines de probar el diseño, puedes cambiar esto por: if (userProfile.streak === 1)
      setMostrarNuevaRacha(true); 
    }
  }, [loading, userProfile]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="welcome-card">
            <h2>Cargando perfil...</h2>
          </div>
        </div>
      </div>
    );
  }

  const challenge = generateChallenge(userProfile);

  return (
    <div className="dashboard-container">

      {/* 🚀 EL OVERLAY DE RACHA NUEVA (Aparecerá encima de todo si la simulación está activa) */}
      {mostrarNuevaRacha && (
        <RachaNuevaView 
          onContinuar={() => {
            setMostrarNuevaRacha(false); // Cierra la simulación visual al dar clic
            navigate('/configurar-meta'); // Te lleva a elegir la meta
          }} 
          onCerrar={() => setMostrarNuevaRacha(false)} // 👈 AGREGA ESTA LÍNEA
        />
      )}

      <div className="dashboard-content">
        <section className="welcome-card">
          <img
            src={avatarNova}
            alt="Nova"
            className="dashboard-avatar"
          />

          <h1>
            ¡Hola{userProfile.name ? `, ${userProfile.name}` : ""}! 👋
          </h1>

          <p className="welcome-message">
            Qué alegría verte nuevamente.
          </p>

          <p className="welcome-message secondary">
            Hoy preparé un desafío especialmente para vos.
          </p>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </section>

        <section className="challenge-card">
          <span className="card-label">
            ✨ MI DESAFÍO DE HOY
          </span>
          <h2>
            {challenge.title}
          </h2>
          <p>
            {challenge.description}
          </p>
          <button>
            Comenzar desafío →
          </button>
        </section>

        <section className="info-card">
          <div className="card-header">
            <h3>🎯 Mi objetivo</h3>
           </div>
            <p>
             {userProfile.goal || "Todavía no definiste un objetivo."}
           </p>
         </section>

        {/* 📈 RECUPERADO Y ACTIVO: Tu progreso semanal intacto */}
        <ProgresoSemanal datos={userProfile} />

        {/* 💡 AQUÍ SE INVOCA EL COMPONENTE RACHA ACTUAL */}
        <Racha diasRacha={userProfile.streak} />

        <div className="dashboard-actions" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <PrimaryButton 
            text="Ver Progreso General"
            onClick={() => navigate('/progreso')}
            variant="primary" 
          />

          <PrimaryButton 
            text="Elegir Meta de Racha"
            onClick={() => navigate('/configurar-meta')}
            variant="secondary" 
          />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
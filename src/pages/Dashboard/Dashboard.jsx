

//Dashboard.jsx Modificado

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/common/PrimaryButton/PrimaryButton';
import { Link } from "react-router-dom";
import "./Dashboard.css";
import avatarNova from "/branding/Avatar-Nova-Estrella.png";
import useDashboard from "../../hooks/useDashboard";
import { generateChallenge } from "../../services/challenges/challengeGenerator";
import Racha from "../Racha/Racha.jsx";

// 💡 Importación unificada correcta
import RachaNuevaView from "../Racha/RachaNuevaView"; 
import { ProgresoSemanal } from '../../components/common/ProgressCards/ProgresoSemanal'; 

function Dashboard() {
  const navigate = useNavigate();

  const {
    currentUser,
    userProfile,
    loading,
    handleLogout,
  } = useDashboard();

  // Estado para controlar la visibilidad del overlay
  const [mostrarNuevaRacha, setMostrarNuevaRacha] = useState(false);

  // Efecto automático basado en los datos reales del perfil
  useEffect(() => {
    if (!loading && userProfile) {
      // Modificamos la condición para que si la racha se reinició (0 o 1) se dispare automáticamente
      if (userProfile.streak === 1 || userProfile.streak === 0) {
        setMostrarNuevaRacha(true);
      }
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

  // 🔥 INTERCEPCIÓN VISUAL: Si la bandera está activa, muestra la pantalla completa
  if (mostrarNuevaRacha) {
    return (
      <RachaNuevaView onContinuar={() => setMostrarNuevaRacha(false)} />
    );
  }

  const challenge = generateChallenge(userProfile);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        
        {/* 🛠️ BOTÓN TEMPORAL DE PRUEBA */}
        <div style={{ background: '#fff3cd', padding: '10px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center', border: '1px solid #ffeeba' }}>
          <span style={{ fontSize: '0.85rem', color: '#856404', marginRight: '10px' }}>🔧 Entorno de Desarrollo:</span>
          <button 
            onClick={() => setMostrarNuevaRacha(true)}
            style={{ padding: '4px 12px', fontSize: '0.8rem', cursor: 'pointer', backgroundColor: '#856404', color: '#fff', border: 'none', borderRadius: '4px' }}
          >
            Forzar Vista "Nueva Racha"
          </button>
          <div style={{ fontSize: '0.75rem', color: '#6c757d', marginTop: '4px' }}>
            <span>Racha actual en base de datos: </span>
            {userProfile?.streak ?? 'undefined'}
          </div>
        </div>

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

        <ProgresoSemanal datos={userProfile} />

        <Racha diasRacha={userProfile.streak} />

        <div className="dashboard-actions" style={{ marginTop: '20px' }}>
          <PrimaryButton 
            text="Ver Progreso General"
            onClick={() => navigate('/progreso')}
            variant="primary" 
          />
        </div>

      </div> 
    </div> 
    );  // Cierra el return correctamente con el paréntesis
} // Cierra la función principal function Dashboard()

export default Dashboard;
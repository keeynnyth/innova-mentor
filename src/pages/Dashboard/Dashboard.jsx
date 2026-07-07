import React from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Importamos tu componente de botón reutilizable
import PrimaryButton from '../../components/common/PrimaryButton/PrimaryButton';

import { Link } from "react-router-dom";

import "./Dashboard.css";

import avatarNova from "/branding/avatar-nova-hi.png";

import useDashboard from "../../hooks/useDashboard";

import { generateChallenge } from "../../services/challenges/challengeGenerator";

import Racha from "../Racha/Racha.jsx";
// Importamos el nuevo componente reutilizable de progreso
import { ProgresoSemanal } from '../../components/common/ProgressCards/ProgresoSemanal'; 

function Dashboard() {

  const navigate = useNavigate();

  const {
    currentUser,
    userProfile,
    loading,
    handleLogout,
  } = useDashboard();

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

        {/* 📈 REEMPLAZADO POR EL NUEVO COMPONENTE REUTILIZABLE */}
        {/* Pasamos 'userProfile' completo ya que contiene tanto 'weeklyProgress' como 'desafios' */}
        <ProgresoSemanal datos={userProfile} />

        {/* 💡 AQUÍ SE INVOCA EL COMPONENTE RACHA: */}
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
  );
}

export default Dashboard;
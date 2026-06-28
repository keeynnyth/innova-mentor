
import "./Dashboard.css";

import avatarNova from "/branding/avatar-nova-hi.png";

import useDashboard from "../../hooks/useDashboard";

import { generateChallenge } from "../../services/challenges/challengeGenerator";

function Dashboard() {

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

        <section className="info-card">

          <div className="card-header">

            <h3>📈 Mi progreso semanal</h3>

          </div>

          <div className="progress-bar">

            <div
              className="progress-value"
              style={{
                width: `${userProfile.weeklyProgress}%`,
              }}
            />

          </div>

          <span className="progress-text">

            {userProfile.weeklyProgress}% completado

          </span>

        </section>

        <section className="info-card">

          <div className="card-header">

            <h3>🔥 Mi racha</h3>

          </div>

          <p>

            {userProfile.streak} días consecutivos

          </p>

          <p className="streak-message">

            ¡Seguí así! 💪

          </p>

        </section>

      </div>

    </div>

  );

}

export default Dashboard;
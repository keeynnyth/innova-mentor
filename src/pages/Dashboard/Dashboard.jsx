
import "./Dashboard.css";
import avatarNova from "/branding/avatar-nova-hi.png";

import { useUser } from "../../contexts/UserContext";
import { generateChallenge } from "../../services/challenges/challengeGenerator";

function Dashboard() {

  const { userProfile } = useUser();

  const goal =
    userProfile.goal || "crear nuevos hábitos";

  const challenge = generateChallenge(userProfile);

  return (
    <div className="dashboard-container">

      <div className="dashboard-content">

        {/* Bienvenida */}

        <section className="welcome-card">

          <img
            src={avatarNova}
            alt="Nova"
            className="dashboard-avatar"
          />

          <h1>
            ¡Hola! 👋
          </h1>

          <p className="welcome-message">
            Qué alegría verte nuevamente.
          </p>

          <p className="welcome-message secondary">
            Preparé un desafío especialmente para ayudarte a <strong>{goal.toLowerCase()}</strong>.
          </p>

        </section>

        {/* Desafío */}

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

        {/* Objetivo */}

        <section className="info-card">

          <div className="card-header">

            <h3>🎯 Mi objetivo</h3>

            <span>›</span>

          </div>

          <p>

            {goal}

          </p>

        </section>

        {/* Progreso */}

        <section className="info-card">

          <div className="card-header">

            <h3>📈 Mi progreso semanal</h3>

          </div>

          <div className="progress-bar">

            <div className="progress-value"></div>

          </div>

          <span className="progress-text">

            70 % completado · ¡Vas muy bien!

          </span>

        </section>

        {/* Racha */}

        <section className="info-card">

          <div className="card-header">

            <h3>🔥 Mi racha</h3>

          </div>

          <p>

            7 días consecutivos

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
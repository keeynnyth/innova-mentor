import { useNavigate } from "react-router-dom";
import "./PrimerPaso.css";

// Activos (ajusta las rutas según tu estructura de carpetas)
import avatarNova from "/branding/avatar-nova-hi.png";
import { useUser } from "../../contexts/UserContext";

function PrimerPaso() {
  const navigate = useNavigate();
  const { user } = useUser(); // O { profile } dependiendo de cómo expongas el contexto

  const nombreUsuario = user?.name || "Juan";

  const handleStartChallenge = () => {
    navigate("/desafio-actual");
  };

  const handleAddTask = () => {
    navigate("/tareas/nueva");
  };

  const handleUploadPDF = () => {
    // Lógica para abrir selector de archivos o navegar
    console.log("Subir PDF");
  };

  return (
    <div className="home-container">
      {/* Sección Superior: Saludo y Mascota */}
      <header className="home-header">
        <h1 className="home-greeting">
          <em>Hola, {nombreUsuario}!</em>
        </h1>

        <div className="home-hero-badge">
          <div className="speech-bubble">
            <p>Cada pequeño paso te acerca a tus metas</p>
          </div>
          <img
            src="/branding/Nova avatar1.png" 
            alt="Nova"
            className="dashboard-avatar"
          />
        </div>
      </header>

      {/* Contenedor Principal de Tarjetas */}
      <main className="home-content">
        {/* Tarjeta 1: Desafío de hoy */}
        <section className="home-card">
          <h2 className="home-card-title">Desafío de hoy</h2>
          <div className="challenge-info">
            <span className="challenge-icon" aria-hidden="true">📖</span>
            <p className="challenge-text">
              Estudia 15 minutos<br />sin distracciones
            </p>
          </div>
          <button
            type="button"
            className="home-btn-primary"
            onClick={handleStartChallenge}
          >
            Comenzar desafío
          </button>
        </section>

        {/* Tarjeta 2: Tareas pendientes */}
        <section className="home-card">
          <h2 className="home-card-title">Tareas pendientes</h2>
          
          {/* Nuevo contenedor de la tarea */}
          <div className="task-item">
            <span className="task-text">Leer capitulo 2 del libro</span>
            <button className="task-check-btn" aria-label="Completar tarea"></button>
          </div>

          <button className="home-btn-dashed" onClick={() => navigate("tareas")}>
            Añadir tarea
          </button>
        </section>

        {/* Tarjeta 3: Escuchá tus apuntes */}
        <section className="home-card">
          <h2 className="home-card-title">Escuchá tus apuntes</h2>
          
          {/* Nuevo contenedor del PDF simulado */}
          <div className="pdf-item">
            <span className="pdf-text">📄 Resumen_Biologia.pdf</span>
            <button className="pdf-listen-btn">Escuchar</button>
          </div>

          <button className="home-btn-dashed" onClick={() => navigate("apuntes")}>
            <span className="btn-icon">☁️</span>
            Subir PDF para convertir en audio
          </button>
        </section>
      </main>

      {/* Barra de Navegación Inferior */}
      <nav className="bottom-navbar">
        <button
          type="button"
          className="nav-item active"
          onClick={() => navigate("/")}
          aria-label="Inicio"
        >
          <i className="icon-home">🏠</i>
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => navigate("/reproductor")}
          aria-label="Reproductor"
        >
          <i className="icon-play">▶️</i>
        </button>

        <button
          type="button"
          className="nav-item nav-item-add"
          onClick={() => navigate("/crear")}
          aria-label="Crear"
        >
          <span>+</span>
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => navigate("/estadisticas")}
          aria-label="Estadísticas"
        >
          <i className="icon-stats">📊</i>
        </button>

        <button
          type="button"
          className="nav-item"
          onClick={() => navigate("/perfil")}
          aria-label="Perfil"
        >
          <i className="icon-user">👤</i>
        </button>
      </nav>
    </div>
  );
}

export default PrimerPaso;
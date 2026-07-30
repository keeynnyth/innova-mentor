import React, { useState } from 'react';
import './racha.css'; 
import avatarNova from "/branding/Avatar-Nova-Estrella.png";

export default function Racha({ diasRacha: rachaReal }) {
  // Estado interno temporal para la simulación. 
  // Si 'rachaReal' es undefined o viene del dashboard, usamos el simulado.
  const [diasSimulados, setDiasSimulados] = useState(rachaReal !== undefined ? rachaReal : 5);
  
  const rachaActiva = diasSimulados > 0;
  const diasSemana = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  
  // Historial visual de ejemplo para la semana
  const estadoDiasEjemplo = ['completed', 'completed', 'completed', 'completed', 'current', '', ''];

  return (
    <section className="info-card streak-section-card">
      
      {/* 1) Mensaje de Ánimo Dinámico */}
      <div className="message-container">
        <div className="card-header">
          <h3>🔥 Mi racha</h3>
        </div>
        <p className="streak-motivation-text">
          {rachaActiva 
            ? `¡Has completado ${diasSimulados} días seguidos! ¡Seguí así! 💪` 
            : 'Conéctate y avanza en tu lección para activar tu racha. 🌱'}
        </p>
      </div>

      {/* Contenedor de Estrella y Número */}
      <div className="streak-stats-wrapper">
        {/* 2) Avatar de Estrella (Sustituido por avatarNova) */}
        <div className="avatar-container">
          <img 
            src="/branding/Nova avatar4.png"
            alt="Avatar Nova Estrella" 
            className={`star-avatar ${rachaActiva ? 'animated' : 'grayed'}`} 
          />
        </div>

        {/* 3) Contabilidad de los días */}
        <div className="streak-number-wrapper">
          <div className={`streak-count ${rachaActiva ? 'active' : 'inactive'}`}>
            {diasSimulados}
          </div>
          <div className="streak-label">Días consecutivos</div>
        </div>
      </div>

      {/* 4) Días de la semana */}
      <div className="week-container">
        {diasSemana.map((dia, index) => {
          const claseEstado = rachaActiva ? estadoDiasEjemplo[index] : '';
          
          return (
            <div key={index} className="day-column">
              <span className="day-label">{dia}</span>
              <div className={`day-indicator ${claseEstado}`}>
                {claseEstado === 'completed' ? '✓' : ''}
              </div>
            </div>
          );
        })}
      </div>

      {/* 🛠️ BOTONES TEMPORALES DE SIMULACIÓN */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'center' }}>
        <button 
          className="btn-test" 
          onClick={() => setDiasSimulados(5)}
          style={{ padding: '4px 10px', fontSize: '0.75rem', cursor: 'pointer' }}
        >
          Probar Racha Alta (5)
        </button>
        <button 
          className="btn-test" 
          onClick={() => setDiasSimulados(0)}
          style={{ padding: '4px 10px', fontSize: '0.75rem', cursor: 'pointer' }}
        >
          Probar Racha en 0
        </button>
      </div>

    </section>
  );
}

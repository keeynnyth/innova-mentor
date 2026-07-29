import React from 'react';
import Racha from '../Racha/Racha.jsx';
import { TarjetasProgreso } from '../../components/common/ProgressCards/TarjetasProgreso.jsx';
import './progreso.css';
import avatarNova from "/branding/Avatar-Nova-Estrella.png";

export default function ProgresoGeneral() {
  const datosUsuario = {
    racha: 3,
    desafíos: '1/5',
    tareas: 10,
    tiempo: '4h 20m'
  };

  const diasSemana = [
    { dia: 'Lun', horas: 1.5, porcentaje: '50%' },
    { dia: 'Mar', horas: 2, porcentaje: '66%' },
    { dia: 'Mié', horas: 0.5, porcentaje: '16%' },
    { dia: 'Jue', horas: 3, porcentaje: '100%' },
    { dia: 'Vie', horas: 1.2, porcentaje: '40%' },
    { dia: 'Sáb', horas: 0, porcentaje: '0%' },
    { dia: 'Dom', horas: 0, porcentaje: '0%' }
  ];

  return (
    /* 1. Contenedor principal que centra todo horizontalmente */
    <div className="dashboard-container">
      
      {/* 2. Contenedor que delimita el ancho exacto (max-width: 430px) */}
      <div className="dashboard-content">
        
        <main className="progreso-pagina-contenedor">
          
          {/* Encabezado: Título + Avatar */}
          <header className="progreso-encabezado-pagina">
            <div className="progreso-titulos-bloque">
              <h1 className="progreso-titulo-principal">Tu progreso</h1>
              <p className="progreso-descripcion-principal">Cada paso te acerca a los objetivos.</p>
            </div>

            <div className="progreso-avatar-encabezado">
              <img 
                src="/branding/Avatar-Estrella-Asombro.png" 
                alt="Avatar Nova" 
                className="avatar-nova-img" 
              />
            </div>
          </header>

          {/* 1. Resumen General */}
          <section className="seccion-progreso">
            <h2 className="seccion-titulo-bloque">Resumen General</h2>
            <TarjetasProgreso datos={datosUsuario} />
          </section>

          {/* 2. Gráfico: Tu Avance */}
          <section className="seccion-progreso">
            <h2 className="seccion-titulo-bloque">Tu avance</h2>
            <p className="seccion-subtitulo">Horas dedicadas a estudiar esta semana</p>
            
            <div className="grafico-contenedor-global">
              <div className="grafico-escala-y">
                <span>3h</span>
                <span>2h</span>
                <span>1h</span>
                <span>0h</span>
              </div>

              <div className="grafico-barras-contenedor">
                {diasSemana.map((item, index) => (
                  <div key={index} className="grafico-columna">
                    <div className="grafico-barra-wrapper">
                      <div className="grafico-barra-valor">{item.horas}h</div>
                      <div 
                        className={`grafico-barra-relleno ${item.horas > 0 ? 'activo' : ''}`} 
                        style={{ height: item.porcentaje }}
                      ></div>
                    </div>
                    <span className="grafico-dia-etiqueta">{item.dia}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Resumen de Logros */}
          <section className="seccion-progreso">
            <h2 className="seccion-titulo-bloque">Logros</h2>
            <div className="logros-cuadricula">
              <div className="tarjeta-logro">
                <div className="logro-icono">🏆</div>
                <div className="logro-info">
                  <h3>Primer desafío</h3>
                  <p>Completa tu primer desafío diario</p>
                </div>
              </div>

              <div className="tarjeta-logro">
                <div className="logro-icono">🔥</div>
                <div className="logro-info">
                  <h3>3 días seguidos</h3>
                  <p>Mantuviste tu racha por 3 días</p>
                </div>
              </div>

              <div className="tarjeta-logro">
                <div className="logro-icono">✅</div>
                <div className="logro-info">
                  <h3>10 tareas</h3>
                  <p>Completaste 10 tareas</p>
                </div>
              </div>

              <div className="tarjeta-logro">
                <div className="logro-icono">🧭</div>
                <div className="logro-info">
                  <h3>Explorador</h3>
                  <p>Viste 5 videos recomendados</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Sección Final: Avatar y Mensaje Motivacional */}
          <section className="seccion-progreso avatar-motivacion-contenedor">
          {/* 1. Primero el Avatar (Izquierda) */}
            <div className="progreso-avatar-encabezado">
              <img 
                src="/branding/Avatar-Nova-EstrellaOjoCerrado.png" 
                alt="Avatar Nova" 
                className="avatar-nova-img" 
              />
            </div>

            {/* 2. Luego el Mensaje (Derecha) */}
            <div className="avatar-burbuja-mensaje">
              <p>¡Vas increíble!</p>
              <p>La constancia de hoy es el éxito de mañana</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
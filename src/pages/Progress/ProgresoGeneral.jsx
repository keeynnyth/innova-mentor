import React from 'react';
import Racha from '../Racha/Racha.jsx';
import { TarjetasProgreso } from '../../components/common/ProgressCards/TarjetasProgreso.jsx';
import './progreso.css';


export default function ProgresoGeneral() {
  // Datos simulados para las métricas
  const datosUsuario = {
    racha: 3,
    desafios: '1/5',
    tareas: 10,
    tiempo: '4h 20m'
  };

  // Datos simulados para el gráfico semanal
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
    <main 
    className="progreso-pagina-contenedor">
        {/* Encabezado de la Página: Título + Avatar alineados */}
      <header className="progreso-encabezado-pagina">
        
        {/* Lado Izquierdo: Títulos */}
        <div className="progreso-titulos-bloque">
          <h1 className="progreso-titulo-principal">Tu Progreso</h1>
          <p className="progreso-descripcion-principal">Cada paso te acerca a los objetivos.</p>
        </div>

        {/* Lado Derecho: Avatar y Mensaje Motivacional */}
        <div className="progreso-avatar-encabezado">
          <div className="avatar-burbuja-mensaje">
            <p>"Vas increíble: La constancia de hoy es el éxito de mañana."</p>
          </div>
          <div className="avatar-posicionamiento">
            <div className="avatar-circulo-temporal">
              <span>🧑‍💻</span>
            </div>
          </div>
        </div>

      </header>

      {/* Componente de la racha actual */}
      {/* <Racha /> */}

      {/* 1. Bloque de Métricas Principales */}
      {/* <section className="seccion-progreso">
        <TarjetasProgreso datos={datosUsuario} />
      </section> */}

      <section className="seccion-progreso">
        <h2 className="seccion-titulo-bloque">Resumen General</h2>
        <TarjetasProgreso datos={datosUsuario} />
      </section>

      {/* 2. Gráfico: Tu Avance */}
      <section className="seccion-progreso grafico-seccion">
        <h2 className="seccion-titulo">Tu avance</h2>
        <p className="seccion-subtitulo">Horas dedicadas a estudiar esta semana</p>
        
        <div className="grafico-contenedor-global">
          
          {/* Escala del eje Y (Tiempos) */}
          <div className="grafico-escala-y">
            <span>3h</span>
            <span>2h</span>
            <span>1h</span>
            <span>0h</span>
          </div>

          {/* Contenedor de las barras */}
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

      {/* 3. Resumen de Logros (4 Tarjetas) */}
      <section className="seccion-progreso">
        <h2 className="seccion-titulo">Logros conseguidos</h2>
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
        <div className="avatar-burbuja-mensaje">
          <p>"Vas increíble: La constancia de hoy es el éxito de mañana."</p>
        </div>
        <div className="avatar-contenedor">
          <div className="avatar-circulo-temporal">🧑‍💻</div>
        </div>
      </section>
    </main>
  );
}
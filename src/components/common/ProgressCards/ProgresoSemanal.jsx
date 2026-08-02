import React from 'react';

// Se eliminó la importación del CSS problemático y se pasaron los estilos a estilos en línea o clases de Tailwind
// import './tarjetasProgreso.css';

export const ProgresoSemanal = ({ datos }) => {
  // 🚀 LÍNEA DE SIMULACIÓN: Fuerza el valor al porcentaje que quieras probar
  const weeklyProgress = 75; 
  // const desafios = "5/7";

  return (
    // Se eliminó el div "metricas-fila" y se agregó width 100%
    <section 
      style={{ 
        width: '100%', 
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        marginBottom: '20px'
      }}
    >
      <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600', color: '#1f2937' }}>
          📈 Mi progreso semanal
        </h3>
      </div>
      
      <div 
        style={{ 
          width: '100%', 
          backgroundColor: '#e5e7eb', 
          borderRadius: '9999px', 
          height: '12px',
          overflow: 'hidden',
          marginBottom: '8px'
        }}
      >
        <div
          style={{ 
            width: `${weeklyProgress}%`, 
            backgroundColor: '#4f46e5', 
            height: '100%', 
            borderRadius: '9999px',
            transition: 'width 0.5s ease-in-out'
          }} 
        />
      </div>
      
      <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
        {weeklyProgress}% completado
      </span>
    </section>
  );
};

export default function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
       <ProgresoSemanal />
    </div>
  )
}
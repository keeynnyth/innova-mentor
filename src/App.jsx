

import { useState } from 'react'
import presentacion from '/branding/presentacion.png'

function App() {
  const [completado, setCompletado] = useState(false)

  return (
    <div style={styles.container}>
      {/* Encabezado */}
      <div style={styles.navbar}>
        <img
          src={presentacion}
          alt="Innova Mentor"
          style={styles.logo}
        />
      </div>

      {/* Contenido */}
      <div style={styles.content}>
        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>
            ¡Hola! Soy Nova 👋
          </h3>

          <p>
            Estoy aquí para acompañarte en tu camino de aprendizaje.
            <br />
            <br />
            Tu primer desafío será comenzar con un pequeño paso.
          </p>

          <button
            style={{
              ...styles.button,
              backgroundColor: completado ? '#10B981' : '#4F46E5'
            }}
            onClick={() => setCompletado(true)}
          >
            {completado
              ? '¡Primer paso completado! ✓'
              : 'Comenzar mi camino'}
          </button>
        </div>

        <p style={styles.textoInfo}>
          Innova Mentor es una Aplicación Web Progresiva (PWA)
          diseñada para ayudarte a recuperar el hábito del estudio,
          acompañado por Nova, tu mentor virtual.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    minHeight: '100vh',
    backgroundColor: '#F3F4F6',
    fontFamily: 'system-ui, sans-serif',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },

  navbar: {
    backgroundColor: '#4F46E5',
    padding: '20px',
    textAlign: 'center',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px'
  },

  logo: {
    width: '220px',
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto'
  },

  content: {
    padding: '20px'
  },

  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    textAlign: 'center'
  },

  button: {
    padding: '12px 24px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '15px'
  },

  textoInfo: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: '14px',
    marginTop: '30px'
  }
}

export default App
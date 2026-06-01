
import { useState } from 'react'

function App() {
  const [completado, setCompletado] = useState(false)

  return (
    <div style={styles.container}>
      {/* Navbar simulado */}
      <div style={styles.navbar}>
        <h2 style={{ margin: 0, color: 'white' }}>Mentor Virtual</h2>
      </div>

      {/* Cuerpo de la App */}
      <div style={styles.content}>
        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>¡Hola! 👋</h3>
          <p>Soy tu mentor. Tu desafío de hoy es revisar el plan de estudio.</p>
          
          <button 
            style={{...styles.button, backgroundColor: completado ? '#10B981' : '#4F46E5'}}
            onClick={() => setCompletado(true)}
          >
            {completado ? '¡Desafío Completado! ✓' : 'Marcar como completado'}
          </button>
        </div>

        <p style={styles.textoInfo}>
          Esta es una prueba de Web App (PWA). Ocupa 0 espacio en tu teléfono y no requiere App Store.
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '400px', // Simula el ancho de un celular
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
    borderBottomRightRadius: '15px',
  },
  content: {
    padding: '20px',
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
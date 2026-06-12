
import { useState } from 'react'
import logoHorizontal from '/branding/logo-horizontal.png'

function App() {
  const [completado, setCompletado] = useState(false)

  return (
    <div style={styles.container}>

      {/* Encabezado de la aplicación */}
      <header style={styles.navbar}>
        <img
          src={logoHorizontal}
          alt="Innova Mentor"
          style={styles.logo}
        />
      </header>

      {/* Contenido principal */}
      <main style={styles.content}>

        {/* Tarjeta de bienvenida */}
        <div style={styles.card}>

          <h2 style={styles.titulo}>
            ¡Hola! Soy Nova 👋
          </h2>

          <p style={styles.parrafo}>
            Estoy aquí para acompañarte en tu camino de aprendizaje.
          </p>

          <p style={styles.parrafo}>
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

        {/* Descripción del proyecto */}
        <p style={styles.textoInfo}>
          Innova Mentor es una Aplicación Web Progresiva (PWA)
          diseñada para acompañar a personas adultas que desean
          recuperar el hábito del estudio mediante pequeños desafíos,
          motivación constante y el apoyo de Nova, su mentor virtual.
        </p>

      </main>

    </div>
  )
}

const styles = {

  container: {
    maxWidth: '400px',
    margin: '0 auto',
    minHeight: '100vh',
    backgroundColor: '#F8FAFF',
    fontFamily: 'system-ui, sans-serif',
    boxShadow: '0 0 12px rgba(0,0,0,0.10)'
  },

  navbar: {
    backgroundColor: '#EEF4FF',
    padding: '28px',
    textAlign: 'center',
    borderBottomLeftRadius: '18px',
    borderBottomRightRadius: '18px',
    borderBottom: '1px solid #DCE7FF'
  },

  logo: {
    width: '300px',
    maxWidth: '95%',
    display: 'block',
    margin: '0 auto'
  },

  content: {
    padding: '22px'
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '18px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    textAlign: 'center'
  },

  titulo: {
    marginTop: 0,
    marginBottom: '18px',
    color: '#23395B'
  },

  parrafo: {
    color: '#4B5563',
    lineHeight: '1.7',
    marginBottom: '18px'
  },

  button: {
    width: '100%',
    padding: '14px',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s'
  },

  textoInfo: {
    marginTop: '28px',
    textAlign: 'center',
    color: '#6B7280',
    fontSize: '14px',
    lineHeight: '1.8'
  }

}

export default App
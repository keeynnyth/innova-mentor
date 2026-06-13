
import { useState } from 'react'
import presentacion from '/branding/presentacion.png'
import avatarNova from '/branding/avatar-nova-hi.png'

function App() {
  const [completado, setCompletado] = useState(false)

  return (
    <div style={styles.container}>

      {/* Encabezado de la aplicación */}
      <header style={styles.navbar}>
        <img
          src={presentacion}
          alt="Innova Mentor"
          style={styles.logo}
        />
      </header>

      {/* Contenido principal */}
      <main style={styles.content}>

        {/* Tarjeta de bienvenida */}
        <div style={styles.card}>

          {/* Saludo de Nova */}
          <div style={styles.tituloContainer}>

            <img
              src={avatarNova}
              alt="Nova"
              style={styles.avatar}
            />

            <h2 style={styles.titulo}>
              ¡Hola! Soy Nova
            </h2>

          </div>

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
    backgroundColor: '#F8FAFF',
    padding: '26px 20px 12px',
    textAlign: 'center'
  },

  logo: {
    width: '340px',
    maxWidth: '100%',
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

  tituloContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
    marginBottom: '22px'
  },

  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '65%',
    objectFit: 'cover',
    
    boxShadow: '0 4px 10px rgba(38,198,218,0.20)'
  },

  titulo: {
    margin: 0,
    color: '#23395B',
    fontSize: '28px',
    fontWeight: '700'
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
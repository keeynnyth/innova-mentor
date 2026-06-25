




import presentacion from '/branding/presentacion.png'
import avatarNova from '/branding/avatar-nova-hi.png'

function App() {
  return (
    <div style={styles.container}>

      {/* Encabezado */}
      <header style={styles.navbar}>
        <img
          src={presentacion}
          alt="Innova Mentor"
          style={styles.logo}
        />
      </header>

      {/* Contenido */}
      <main style={styles.content}>

        <div style={styles.card}>

          {/* Avatar Nova */}
          <img
            src={avatarNova}
            alt="Nova"
            style={styles.avatar}
          />

          <h2 style={styles.titulo}>
            ¡Hola! Soy Nova
         </h2>

          {/* Subtítulo */}
         <p style={styles.subtitulo}>
         👋 Tu mentora virtual
        </p>

          {/* Descripción */}
          <p style={styles.parrafo}>
            Estoy aquí para ayudarte a construir hábitos de aprendizaje y alcanzar tus objetivos.
          </p>

          <p style={styles.parrafo}>
            Juntos avanzaremos paso a paso.
          </p>

          {/* Botón Registrarse */}
          <button style={styles.buttonPrimary}>
            Registrarse
          </button>

          {/* Botón Iniciar Sesión */}
          <button style={styles.buttonSecondary}>
            Iniciar sesión
          </button>

        </div>

        {/* Información del proyecto */}
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
    padding: '28px',
    borderRadius: '18px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
    textAlign: 'center'
  },

avatar: {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '12px',
  boxShadow: '0 4px 12px rgba(38,198,218,0.25)'
},

titulo: {
  margin: '0 0 6px',
  color: '#23395B',
  fontSize: '28px',
  fontWeight: '700'
},

subtitulo: {
  marginTop: 0,
  marginBottom: '22px',
  color: '#23395B',
  fontWeight: '600',
  fontSize: '18px'
},

  parrafo: {
    color: '#4B5563',
    lineHeight: '1.8',
    marginBottom: '16px'
  },

  buttonPrimary: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4F46E5',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '12px',
    marginBottom: '12px'
  },

  buttonSecondary: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#FFFFFF',
    color: '#4F46E5',
    border: '2px solid #4F46E5',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
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
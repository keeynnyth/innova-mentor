
import './Register.css'
import avatarNova from '/branding/avatar-nova-hi.png'

function Register() {
  return (
    <div className="register-container">

      <div className="register-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="register-avatar"
        />

        <h1 className="register-title">
          Crear cuenta
        </h1>

        <p className="register-subtitle">
          Comencemos juntos tu camino de aprendizaje.
        </p>

        <form className="register-form">

          <input
            type="text"
            placeholder="Nombre completo"
            className="register-input"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="register-input"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="register-input"
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="register-input"
          />

          <button
            type="submit"
            className="register-button"
          >
            Crear cuenta
          </button>

        </form>

        <p className="register-login-text">
          ¿Ya tienes una cuenta?
        </p>

        <button className="login-link">
          Iniciar sesión
        </button>

      </div>

    </div>
  )
}

export default Register
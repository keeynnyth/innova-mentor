

import './Login.css'
import avatarNova from '/branding/avatar-nova-hi.png'

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="login-avatar"
        />

        <h1 className="login-title">
          Iniciar sesión
        </h1>

        <p className="login-subtitle">
          Me alegra verte de nuevo.
        </p>

        <form className="login-form">

          <input
            type="email"
            placeholder="Correo electrónico"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
          />

          <button
            type="submit"
            className="login-button"
          >
            Iniciar sesión
          </button>

        </form>

        <button className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </button>

        <p className="login-register-text">
          ¿No tienes una cuenta?
        </p>

        <button className="register-link">
          Crear cuenta
        </button>

      </div>

    </div>
  )
}

export default Login
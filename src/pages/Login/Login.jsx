
import "./Login.css";
import { useNavigate } from "react-router-dom";

import avatarNova from "/branding/avatar-nova-hi.png";

import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporalmente simulamos un inicio de sesión exitoso.
    // Más adelante aquí irá la autenticación con Firebase.
    navigate("/mi-recorrido");
  };

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

        <form
          className="login-form"
          onSubmit={handleLogin}
        >
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

          <PrimaryButton
            text="Iniciar sesión"
            type="submit"
          />
        </form>

        <button className="forgot-password-link">
          ¿Olvidaste tu contraseña?
        </button>

        <p className="login-register-text">
          ¿No tienes una cuenta?
        </p>

        <button
          className="register-link"
          onClick={() => navigate("/registro")}
        >
          Crear cuenta
        </button>
      </div>
    </div>
  );
}

export default Login;
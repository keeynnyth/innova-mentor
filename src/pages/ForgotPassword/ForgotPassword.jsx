
import "./ForgotPassword.css";
import avatarNova from "/branding/avatar-nova-hi.png";

import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  return (

    <div className="forgot-container">

      <div className="forgot-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="forgot-avatar"
        />

        <h1 className="forgot-title">
          Recuperar contraseña
        </h1>

        <p className="forgot-subtitle">
          Ingresá tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="forgot-input"
        />

        <button className="forgot-button">
          Enviar enlace
        </button>

        <button
          className="forgot-link"
          onClick={() => navigate("/login")}
        >
          Volver al inicio de sesión
        </button>

      </div>

    </div>

  );
}

export default ForgotPassword;
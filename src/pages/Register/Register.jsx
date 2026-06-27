
import "./Register.css";
import { useNavigate } from "react-router-dom";

import avatarNova from "/branding/avatar-nova-hi.png";

import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Temporalmente simulamos un registro exitoso.
    // Más adelante aquí irá la lógica de Firebase.
    navigate("/mentor");
  };

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

        <form
          className="register-form"
          onSubmit={handleRegister}
        >
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

          <PrimaryButton
            text="Crear cuenta"
            type="submit"
          />
        </form>

        <p className="register-login-text">
          ¿Ya tienes una cuenta?
        </p>

        <button
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default Register;
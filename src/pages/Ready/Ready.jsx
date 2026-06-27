
import "./Ready.css";
import { useNavigate } from "react-router-dom";

import avatarNova from "/branding/avatar-nova-hi.png";

import PrimaryButton from "../../components/common/PrimaryButton/PrimaryButton";

function Ready() {
  const navigate = useNavigate();

  return (
    <div className="ready-container">
      <div className="ready-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="ready-avatar"
        />

        <h1 className="ready-title">
          ¡Perfecto! 🎉
        </h1>

        <p className="ready-text">
          Gracias por contarme un poco sobre vos.
        </p>

        <p className="ready-text">
          Ahora ya conozco tus objetivos,
          los desafíos que querés superar,
          el tiempo que podés dedicar
          y los temas que más te interesan.
        </p>

        <div className="ready-summary">

          <div className="summary-item">
            ✅ Objetivo definido
          </div>

          <div className="summary-item">
            ✅ Tiempo registrado
          </div>

          <div className="summary-item">
            ✅ Intereses guardados
          </div>

        </div>

        <p className="ready-text">
          Con toda esta información,
          voy a preparar un recorrido
          pensado especialmente para vos.
        </p>

        <h2 className="ready-question">
          Estoy lista.
          <br />
          ¿Comenzamos?
        </h2>

        <PrimaryButton
          text="Comenzar mi recorrido"
          onClick={() => navigate("/mi-recorrido")}
        />

      </div>
    </div>
  );
}

export default Ready;
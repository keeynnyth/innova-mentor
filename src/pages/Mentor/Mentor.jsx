

import "./Mentor.css";
import avatarNova from "/branding/avatar-nova-hi.png";

function Mentor() {
  return (
    <div className="mentor-container">
      <div className="mentor-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="mentor-avatar"
        />

        <h1 className="mentor-title">
          ¡Hola! 👋
        </h1>

        <h2 className="mentor-subtitle">
          Soy Nova,
          <br />
          tu mentora virtual.
        </h2>

        <p className="mentor-text">
          Estoy muy contenta de que estés acá.
        </p>

        <p className="mentor-text">
          Vamos a recorrer este camino juntos.
        </p>

       <p className="mentor-text">
         Antes de empezar,
         <br />
         quiero conocerte un poco
         <br />
         para poder acompañarte
        <br />
         de la mejor manera.
        </p>

        <h3 className="mentor-question">
          ¿Empezamos?
        </h3>

        <button className="mentor-button">
          Sí, empecemos
        </button>

      </div>
    </div>
  );
}

export default Mentor;
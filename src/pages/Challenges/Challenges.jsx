
import { useState } from "react";
import "./Challenges.css";

import avatarNova from "/branding/avatar-nova-hi.png";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

function Challenges() {

  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      icon: "🔥",
      text: "Mantener la motivación",
    },
    {
      id: 2,
      icon: "⏰",
      text: "Organizar mi tiempo",
    },
    {
      id: 3,
      icon: "💪",
      text: "Ser constante",
    },
    {
      id: 4,
      icon: "📝",
      text: "Recordar mis tareas",
    },
    {
      id: 5,
      icon: "🚫",
      text: "Evitar la procrastinación",
    },
  ];

  return (
    <div className="challenges-container">

      <div className="challenges-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="challenges-avatar"
        />

        <h1 className="challenges-title">
          ¿Qué suele resultarte más difícil?
        </h1>

        <p className="challenges-text">
          Es normal encontrar desafíos cuando queremos incorporar nuevos hábitos.
        </p>

        <p className="challenges-text">
          Contame cuál es el que más te representa para que pueda acompañarte.
        </p>

        <div className="challenges-options">

          {challenges.map((challenge) => (

            <SelectionCard
              key={challenge.id}
              icon={challenge.icon}
              text={challenge.text}
              selected={selectedChallenge === challenge.id}
              onClick={() => setSelectedChallenge(challenge.id)}
            />

          ))}

        </div>

        <button
          className={`continue-button ${selectedChallenge ? "enabled" : ""}`}
          disabled={!selectedChallenge}
        >
          Continuar
        </button>

      </div>

    </div>
  );
}

export default Challenges;
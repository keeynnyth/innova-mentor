
import { useState } from "react";
import "./Goals.css";

import avatarNova from "/branding/avatar-nova-hi.png";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

function Goals() {

  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    {
      id: 1,
      icon: "📚",
      text: "Crear un hábito de lectura",
    },
    {
      id: 2,
      icon: "🎯",
      text: "Crear una rutina de estudio",
    },
    {
      id: 3,
      icon: "📋",
      text: "Organizar mejor mis tareas",
    },
    {
      id: 4,
      icon: "🚀",
      text: "Mantener el foco en mis metas",
    },
    {
      id: 5,
      icon: "💪",
      text: "Ser más constante",
    },
  ];

  return (
    <div className="goals-container">

      <div className="goals-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="goals-avatar"
        />

        <h1 className="goals-title">
          ¿Qué te gustaría lograr?
        </h1>

        <p className="goals-text">
          Contame cuál de estas opciones representa mejor tu objetivo.
        </p>

        <p className="goals-text">
          Así voy a poder acompañarte de una forma más personalizada.
        </p>

        <div className="goals-options">

          {goals.map((goal) => (

            <SelectionCard
              key={goal.id}
              icon={goal.icon}
              text={goal.text}
              selected={selectedGoal === goal.id}
              onClick={() => setSelectedGoal(goal.id)}
            />

          ))}

        </div>

        <button
          className={`continue-button ${selectedGoal ? "enabled" : ""}`}
          disabled={!selectedGoal}
        >
          Continuar
        </button>

      </div>

    </div>
  );
}

export default Goals;
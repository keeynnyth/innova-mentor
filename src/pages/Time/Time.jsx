

import { useState } from "react";
import "./Time.css";

import avatarNova from "/branding/avatar-nova-hi.png";
import SelectionCard from "../../components/SelectionCard/SelectionCard";

function Time() {

  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    {
      id: 1,
      icon: "⏱️",
      text: "Menos de 10 minutos",
    },
    {
      id: 2,
      icon: "⌛",
      text: "Entre 10 y 20 minutos",
    },
    {
      id: 3,
      icon: "🕒",
      text: "Entre 20 y 40 minutos",
    },
    {
      id: 4,
      icon: "📅",
      text: "Más de 40 minutos",
    },
  ];

  return (
    <div className="time-container">

      <div className="time-card">

        <img
          src={avatarNova}
          alt="Nova"
          className="time-avatar"
        />

        <h1 className="time-title">
          ¿Cuánto tiempo podrías dedicar por día?
        </h1>

        <p className="time-text">
          No hace falta disponer de muchas horas.
        </p>

        <p className="time-text">
          Contame cuánto tiempo pensás que podrías dedicar y juntos construiremos un plan que se adapte a tu ritmo.
        </p>

        <div className="time-options">

          {times.map((time) => (

            <SelectionCard
              key={time.id}
              icon={time.icon}
              text={time.text}
              selected={selectedTime === time.id}
              onClick={() => setSelectedTime(time.id)}
            />

          ))}

        </div>

        <button
          className={`continue-button ${selectedTime ? "enabled" : ""}`}
          disabled={!selectedTime}
        >
          Continuar
        </button>

      </div>

    </div>
  );
}

export default Time;
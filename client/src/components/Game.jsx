import React, { useState } from "react";

export const Game = ({ topic }) => {
  const [score, setScore] = useState(0);

  return (
    <div className="game-container">
      <div className="header-game">
        <p>Responde a las siguientes preguntas de {topic}</p>
        <p>Puntaje: {score}</p>
      </div>
      <div className="game">
        <p>Pregunta {score + 1}</p>
        <p>¿En qué año empezo la primera guerra mundial?</p>
        <div className="answers-container">
          <button className="answer-1">1912</button>
          <button className="answer-2">1914</button>
          <button className="answer-3">1916</button>
          <button className="answer-4">1918</button>
        </div>
      </div>
    </div>
  );
};

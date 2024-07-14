import React from "react";

export const Home = ({ setTopic }) => {
  return (
    <div className="home-container">
      <p>Responder y aprender</p>
      <p>Selecciona el tema del que quieres que sean las preguntas</p>
      <div className="topics-container">
        <button className="topic-music" onClick={() => setTopic("Musica")}>
          Musica
        </button>
        <button className="topic-sports" onClick={() => setTopic("Deportes")}>
          Deportes
        </button>
        <button className="topic-history" onClick={() => setTopic("Historia")}>
          Historia
        </button>
        <button className="topic-science" onClick={() => setTopic("Ciencia")}>
          Ciencia
        </button>
        <button className="topic-art" onClick={() => setTopic("Arte")}>
          Arte
        </button>
        <button
          className="topic-enterteiment"
          onClick={() => setTopic("Entretenemiento")}
        >
          Entretenimiento
        </button>
      </div>
    </div>
  );
};

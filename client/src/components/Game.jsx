import { useState } from "react";
import questions from "../assets/questions.json";
import PropTypes from "prop-types";

Game.propTypes = {
  topic: PropTypes.string.isRequired,
  setTopic: PropTypes.func.isRequired,
};

export const Game = ({ topic, setTopic }) => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const topicQuestions = questions[topic];
  const currentQuestion = topicQuestions[currentQuestionIndex];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
      nextQuestion();
    } else {
      alert("Respuesta incorrecta");
      setTopic(null);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < topicQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Juego terminado. Puntaje final: ${score}`);
    }
  };

  return (
    <div className="game-container">
      <div className="header-game">
        <p>Responde a las siguientes preguntas de {topic}</p>
        <p>Puntaje: {score}</p>
      </div>
      <div className="game">
        <p>Pregunta {currentQuestion.id}</p>
        <p className="question">{currentQuestion.question}</p>
        <div className="answers-container">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`answer-${index + 1}`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

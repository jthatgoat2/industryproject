import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuizPage.scss";

const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataForQuiz = async () => {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
      );
      console.log(response.data);
      setQuizData(response.data.results);
      setLoading(false);
    };
    dataForQuiz();
    setError(error);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="quiz-container">
      {quizData &&
        quizData.map((question, index) => (
          <div key={index} className="quiz-question">
            <h2>{question.question}</h2>
            <div className="quiz-options">
              {question.options?.map((option, idx) => (
                <button key={idx} className="quiz-option">
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Quiz;

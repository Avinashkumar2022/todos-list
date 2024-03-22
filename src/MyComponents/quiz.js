import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);

  const quizQuestions = [
    {
      question: 'What is the largest planet in solar system?',
      choices: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctIndex: 1,
    },
    {
      question: 'What is the symbol of element of gold?',
      choices: ['Fe', 'Au', 'Zn', 'Na'],
      correctIndex: 1,
    },
    {
      question: 'What is the capital of canada?',
      choices: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
      correctIndex: 1,
    },
  ];

  const handleChoiceClick = (selectedIndex) => {
    if (selectedIndex === quizQuestions[currentIdx].correctIndex) {
      setPlayerScore(playerScore + 1);
    }

    const nextQuestionIdx = currentIdx + 1;
    if (nextQuestionIdx < quizQuestions.length) {
      setCurrentIdx(nextQuestionIdx);
    } else {
      alert(`Quiz completed! Your score: ${playerScore}`);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          alert(`Time's up! Your score: ${playerScore}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [playerScore]);

  return (
    <div>
      <h1>Quiz Time</h1>
      <h2>Question {currentIdx + 1}</h2>
      <p>{quizQuestions[currentIdx].question}</p>
      <ul>
        {quizQuestions[currentIdx].choices.map((choice, index) => (
          <li key={index} onClick={() => handleChoiceClick(index)}>
            {choice}
          </li>
        ))}
      </ul>
      <p>Remaining Time: {timeRemaining} seconds</p>
    </div>
  );
};

export default QuizComponent;
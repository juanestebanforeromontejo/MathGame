"use client";

import { useEffect, useState } from "react";
import CorrectScreen from "./CorrectScreen";
import Link from "next/link";

interface Question {
  question: string;
  answers: string[];
  correct: string;
}

interface Props {
  questions: Question[];
}

const QuestionDisplayer = (props: Props) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [correctScreen, setCorrectScreen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAnswer !== null) {
      const isCorrect = props.questions[index].correct === selectedAnswer;
      setAnswerCorrect(isCorrect);

      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }

      setCorrectScreen(true);
    }
  }, [selectedAnswer]);

  function handler(answer: string) {
    setSelectedAnswer(answer);
  }

  function handleNext() {
    if (index < props.questions.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      setCorrectScreen(false);
      setSelectedAnswer(null);
    }
  }

  return (
    <>
      {!correctScreen && (
        <div className="bg-gray-800 flex flex-col p-5">
          <h3 className="bg-gray-700 text-2xl text-gray-300 m-3 p-3">
            {props.questions[index].question}
          </h3>
          <div className="bg-gray-900 flex flex-col p-5">
            {props.questions[index].answers.map((answer) => (
              <button
                key={answer}
                className="text-2xl text-gray-300 m-3 p-3 bg-gray-800 border-none"
                onClick={() => handler(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}

      {correctScreen && (
        <div className="bg-gray-800 flex flex-col p-5">
          {answerCorrect ? (
            <CorrectScreen answerCorrect={answerCorrect} />
          ) : (
            <CorrectScreen answerCorrect={answerCorrect} />
          )}
          {index !== props.questions.length - 1 && (
            <button
              className="text-2xl text-gray-300 m-3 p-3 bg-gray-800 border-none"
              onClick={handleNext}
            >
              Next Question
            </button>
          )}
          {index === props.questions.length - 1 && (
            <Link href="/start/play" className="text-2xl text-gray-300 m-3 p-3 bg-gray-800 border-none">
              go to the menu
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default QuestionDisplayer;


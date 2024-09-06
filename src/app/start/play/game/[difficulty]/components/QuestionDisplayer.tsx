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

  function handler(answer: string) {
    handleAnswer(answer);
    handleIndex();
    handleScreen();
    handleCorrectAnswers();
  }

  function handleCorrectAnswers() {
    console.log(answerCorrect);
    if (answerCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      console.log(correctAnswers);
      return
    }

    console.log(correctAnswers);
  }

  function handleIndex() {
    if (index === props.questions.length - 1) {
      return
    } else {
      setIndex(index + 1);
    }
  }

  function handleAnswer(answer: string) {
    setAnswerCorrect(props.questions[index].correct === answer);
  }

  function handleScreen() {
    setCorrectScreen(!correctScreen);
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
            <CorrectScreen answerCorrect={answerCorrect}/>
          ) : (
            <CorrectScreen answerCorrect={answerCorrect}/>
          )}
          {index !== props.questions.length - 1 && (
            <button
              className="text-2xl text-gray-300 m-3 p-3 bg-gray-800 border-none"
              onClick={handleScreen}
            >
              Next Question
            </button>
          )}
          {index === props.questions.length - 1 && (
            <Link href="/start/play" className="text-2xl text-gray-300 m-3 p-3 bg-gray-800 border-none">go to the menu</Link>
          )}
        </div>
      )}

    </>
  );
};

export default QuestionDisplayer;


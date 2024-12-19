import React from "react";
import { questions } from "../data/data";

export default function Questions() {
  return (
    <div className="flex  flex-col gap-5 min-h-screen w-full whitespace-pre-line font-comfortaa">
      {questions.map((question, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h1 className="text-bold text-xl">
            {question.id}. {question.question}
          </h1>
          <ul className="">
            <li className="">{question.correctAnswer}</li>
            {/* {question.otherAnswers.map((answer, idx) => (
              <li key={idx} className="other-answer">
                {answer}
              </li>
            ))} */}
          </ul>
          <hr className="h-1 w-full border-none bg-black rounded-full opacity-40" />
        </div>
      ))}
    </div>
  );
}

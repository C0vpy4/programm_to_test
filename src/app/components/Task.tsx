"use client";

import React, { useState, useMemo } from "react";
import { generateQuestionsWithRandomAnswers } from "../data/generateQuest";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../shared/Button";
import Notification from "../shared/Notification";

const questionsWithAnswers = generateQuestionsWithRandomAnswers();

const Task: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //   const [feedback, setFeedback] = useState<string | null>(null);
  const [answerResult, setAnswerResult] = useState<boolean | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const currentQuestion = questionsWithAnswers[currentQuestionIndex];
  const options = useMemo(() => {
    return shuffleArray([
      currentQuestion.correctAnswer,
      ...currentQuestion.otherAnswers,
    ]);
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    setAnswerResult(isCorrect);
    setShowNotification(true);

    if (isCorrect) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) =>
          prev + 1 < questionsWithAnswers.length ? prev + 1 : 0
        );
        setShowNotification(false);
      }, 1000);
    } else {
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  //   useEffect(() => {
  //     if (showNotification) {
  //       const timer = setTimeout(() => {
  //         setShowNotification(false);
  //         setAnswerResult(null);
  //       }, 3000);

  //       return () => clearTimeout(timer);
  //     }
  //   }, [showNotification]);

  return (
    <div className="w-[85%] font-comfortaa z-10">
      {/* <Notification /> */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="question-container"
        >
          {/*Здесь нужно изменить тестирование на конкретный пункт в вопросе и его номер соответственно*/}
          <h1 className="lg:text-[32px] md:text-[16px] sm:text-[14px] font-bold">
            {currentQuestion.question}
          </h1>
          <h4 className="font-thin text-sm opacity-40">
            Вопрос по {currentQuestion.type} № {currentQuestion.id}
          </h4>
          <div className="mt-4 flex flex-col gap-5">
            {options.map((option, index) => (
              <div key={index} onClick={() => handleAnswer(option)}>
                <Button answer={option} />
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
      {showNotification && answerResult !== null && (
        <Notification answerResult={answerResult} />
      )}
    </div>
  );
};

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export default Task;

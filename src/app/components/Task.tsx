"use client";

import React, { useState, useMemo } from "react";
import { generateQuestionsWithRandomAnswers } from "../data/generateQuest";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../shared/Button";
import Notification from "../shared/Notification";
import ButtonDown from "../shared/ButtonDown";

const questionsWithAnswers = generateQuestionsWithRandomAnswers();

const Task: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerResult, setAnswerResult] = useState<boolean | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const currentQuestion = questionsWithAnswers[currentQuestionIndex];
  const options = useMemo(() => {
    return shuffleArray([
      currentQuestion.correctAnswer,
      ...currentQuestion.otherAnswers,
    ]);
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: string, index: number) => {
    const isCorrect = answer === currentQuestion.correctAnswer;
    setAnswerResult(isCorrect);
    setSelectedAnswerIndex(index);
    setShowNotification(true);

    if (isCorrect) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) =>
          prev + 1 < questionsWithAnswers.length ? prev + 1 : 0
        );
        setShowNotification(false);
        setSelectedAnswerIndex(null);
      }, 3000);
    } else {
      setTimeout(() => {
        setShowNotification(false);
        setSelectedAnswerIndex(null);
      }, 3000);
    }
  };

  return (
    <div className="w-[85%] font-comfortaa z-10 relative">
      <ButtonDown />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -50, x: 20 }}
          transition={{ duration: 0.5 }}
          className="question-container"
        >
          <h1 className="text-[34px] lg:text-[32px] md:text-[16px] sm:text-[14px] font-bold">
            {currentQuestion.question}
          </h1>
          <h4 className="text-[24px] font-thin lg:text-sm md:text-[10px] sm:text-[8px] opacity-40">
            Вопрос по тестированию № {currentQuestion.id}
          </h4>
          <h4 className="text-[16px] font-thin lg:text-sm md:text-[10px] sm:text-[8px] opacity-40 block lg:hidden md:hidden sm:hidden w-full text-center py-5">
            *Тапни по ответу*
          </h4>
          <div className="mt-4 flex flex-col gap-5">
            {options.map((option, index) => (
              <div key={index} onClick={() => handleAnswer(option, index)}>
                <Button
                  answer={option}
                  borderColor={
                    selectedAnswerIndex === index
                      ? answerResult
                        ? "green"
                        : "red"
                      : "black"
                  }
                />
              </div>
            ))}
          </div>
          <div
            id="footer"
            className="text-[16px] font-thin lg:text-sm md:text-[10px] sm:text-[8px] opacity-40 w-full text-center py-20"
          >
            Версия приложения: 1.0.5 <br />
            Ответы, были сделаны при помощи ChatGPT, в случае нахождения ошибки
            пишите на <a href="https://t.me/ArtV1No">@ArtV1no</a>
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

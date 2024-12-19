import { questions } from "./data";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  otherAnswers: string[];
  type: string;
}

export const generateQuestionsWithRandomAnswers = (): Question[] => {
  return shuffleArray(questions).map((q, index) => {
    const otherAnswers = questions
      .filter((_, i) => i !== index)
      .map((q) => q.correctAnswer);

    return {
      ...q,
      otherAnswers: shuffleArray(otherAnswers).slice(0, 3),
    };
  });
};

const shuffleArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

import { questions } from "./data";

export const generateQuestionsWithRandomAnswers = () => {
  return questions.map((q, index) => {
    const otherAnswers = questions
      .filter((_, i) => i !== index)
      .map((q) => q.correctAnswer);

    return {
      ...q,
      otherAnswers: shuffleArray(otherAnswers).slice(0, 3),
    };
  });
};

const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

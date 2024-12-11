import React from "react";

export default function Notification(props: { answerResult: boolean }) {
  const { answerResult } = props;
  return (
    <div
      className="flex items-center gap-2 justify-center w-2/12 h-14 rounded-full  text-white fixed bottom-4 right-4 ease-in transition-all"
      style={{
        background: `${!answerResult ? "red" : "green"}`,
      }}
    >
      <h1
        className="bg-white rounded-full p-2 text-center font-extrabold"
        style={{
          color: `${!answerResult ? "red" : "green"}`,
        }}
      >
        {!answerResult ? "❌" : "✅"}
      </h1>
      {!answerResult ? "Неверно" : "Верно"}
    </div>
  );
}

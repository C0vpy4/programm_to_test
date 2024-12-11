import React from "react";

export default function Button(props: { answer: string }) {
  const { answer } = props;
  return (
    <div className="border-l-black border-l-4 hover:border-opacity-5 ease-in transition-all ">
      <button className="lg:text-[16px] md:text-[12px] sm:text-[10px] text-start ease-in transition-all pl-2 hover:pl-4 whitespace-pre-line">
        {answer}
      </button>
    </div>
  );
}

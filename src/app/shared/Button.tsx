export default function Button(props: { answer: string; borderColor: string }) {
  const { answer, borderColor } = props;

  return (
    <div
      className={`border-l-4 hover:border-opacity-5 ease-in transition-all`}
      style={{ borderColor }}
    >
      <button className="text-[17px] lg:text-[16px] md:text-[10px] sm:text-[10px] text-start ease-in transition-all pl-2 hover:pl-4 whitespace-pre-line">
        {answer}
      </button>
    </div>
  );
}

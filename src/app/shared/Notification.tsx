import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationProps {
  answerResult: boolean;
}

const Notification: React.FC<NotificationProps> = ({ answerResult }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={answerResult.toString()}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-2 justify-center 
        w-[45px] h-[45px] lg:w-2/12 lg:h-14 md:w-2/12 md:h-14 
        rounded-xl lg:rounded-full text-white fixed 
        top-4 right-4 sm:bottom-4 sm:right-4 lg:bottom-4 lg:right-4 
        sm:top-auto sm:right-auto ease-in-out`}
        style={{ backgroundColor: answerResult ? "green" : "red" }}
      >
        <div
          className="bg-white rounded-full w-[35px] h-[35px] flex items-center justify-center text-center font-extrabold border-2"
          style={{
            color: answerResult ? "green" : "red",
            borderColor: answerResult ? "green" : "red",
          }}
        >
          {answerResult ? "✅" : "❌"}
        </div>
        <div className="hidden lg:block font-medium">
          {answerResult ? "Верно" : "Неверно"}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;

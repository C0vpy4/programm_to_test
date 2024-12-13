"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Burger() {
  const [isClicked, setBooleanClick] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".burger-container")) {
        setBooleanClick(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 1 }}
      className="fixed left-4 top-4 flex justify-center gap-4 w-auto z-20 font-stetica burger-container"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="font-bold text-xl cursor-pointer p-4 bg-white h-fit rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setBooleanClick(!isClicked);
        }}
      >
        <motion.div
          animate={isClicked ? { scale: 0.7 } : { scale: 1 }}
          className="flex items-center justify-center"
        >
          <Image
            src={`${!isClicked ? "/menu.png" : "/closing.png"}`}
            alt="menu icon"
            width={20}
            height={20}
          />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-5 bg-white rounded-md drop-shadow-x shadow-black"
          >
            <div className="flex justify-center gap-12 flex-col opacity-55">
              <div className="cursor-pointer hover:underline hover:pl-2 hover:opacity-100 opacity-55 ease-in transition-all">
                Тестирование
              </div>
              <div className="cursor-pointer hover:underline hover:pl-2 hover:opacity-100 opacity-55 ease-in transition-all">
                Проектирование
              </div>
              <div className="cursor-pointer hover:underline hover:pl-2 hover:opacity-100 opacity-55 ease-in transition-all">
                Философия
              </div>
              <div className="cursor-pointer hover:underline hover:pl-2 hover:opacity-100 opacity-55 ease-in transition-all">
                Проектная деятельность
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

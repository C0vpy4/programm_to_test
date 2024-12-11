import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ButtonDown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="bg-black w-[70px] h-[70px] rounded-full fixed bottom-4 right-4
      cursor-pointer hover:scale-105 flex items-center justify-center"
    >
      <Link href="#footer" className="w-screen h-full  p-3">
        <Image
          src="/icon_down.png"
          alt="Кнопка вниз"
          width={100}
          height={100}
        />
      </Link>
    </motion.div>
  );
}

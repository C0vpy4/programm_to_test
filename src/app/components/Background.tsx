import React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 z-0 opacity-10 lg:opacity-25  md:opacity-25 sm:opacity-10 ease-in transition-all">
      <Image
        src="/background.png"
        alt=""
        layout="fill"
        objectFit="cover" // Растянуть изображение по всей области
      />
    </div>
  );
}

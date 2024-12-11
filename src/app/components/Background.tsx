import React from "react";
import Image from "next/image";


export default function Background() {
  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Image
        src="/background.png"
        alt=""
        layout="fill"
        objectFit="cover" // Растянуть изображение по всей области
      />
    </div>
  );
}

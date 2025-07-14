"use client";
import React, { useState } from "react";
import Image from "next/image";

const StoryCard = ({ image, content, date }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="cursor-pointer shadow-lg transform ${rotate} transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-105 object-contain flex-shrink-0 sm:max-w-md lg:max-w-xl snap-start">
      {!flipped ? (
        <div className="w-60" onClick={() => setFlipped(!flipped)}>
          <div className="text-[14px] bg-white text-center w-full">{date}</div>

          <Image
            src={image}
            alt={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-80"
          ></Image>

          <div className="text-[20px] bg-white text-center h-20 p-5 w-full">
            Click for more deets!
          </div>
        </div>
      ) : (
        <div
          className="text-[15px] bg-white hover:bg-gray-100 h-100 w-60 text-center p-4"
          onClick={() => setFlipped(!flipped)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default StoryCard;

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

          <div className="flex aspect-9/16 bg-black"><img className="object-contain text-white" src={image} alt={image}/></div>

          <div className="text-[20px] bg-white text-center h-20 p-5 w-full">
            Click for more details!
          </div>
        </div>
      ) : (
        <div
          className="flex text-[15px] bg-white hover:bg-gray-100 w-60 h-120 text-center p-4"
          onClick={() => setFlipped(!flipped)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default StoryCard;

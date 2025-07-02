"use client";
import React, { useState } from "react";
import Image from "next/image";

const StoryCard = ({ image, content, date }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="cursor-pointer shadow-lg relative transform ${rotate} transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-105">
      {!flipped ? (
        <div className="w-60" onClick={() => setFlipped(!flipped)}>
          <div className="text-[14px] bg-white text-center">{date}</div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            src={image}
            alt="Proposal Pic"
          ></Image>

          <div className="text-[20px] bg-white text-center h-20 p-5">
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

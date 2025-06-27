"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordianCell = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-md shadow-sm mb-2">
      <label
        className="text-[21px] w-full flex justify-between items-center cursor-pointer bg-purple-200 hover:bg-gray-200 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {faq.question} {open ? <FaChevronUp /> : <FaChevronDown />}
      </label>

      {open ? (
        <p className="w-full justify-center items-center border-2 border-purple-300">
          {faq.answer}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AccordianCell;

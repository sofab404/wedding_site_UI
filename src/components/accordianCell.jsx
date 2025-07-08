"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordianCell = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-md shadow-sm mb-2 p-4 bg-purple-200 hover:bg-purple-100">
      <label
        className="text-[21px] w-full flex justify-between items-center cursor-pointer transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{faq.question}</span>

        <span className="pr-4">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </label>

      {open ? (
        <p className="w-full justify-center items-center">{faq.answer}</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default AccordianCell;

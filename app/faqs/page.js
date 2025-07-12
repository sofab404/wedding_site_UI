"use client"
import React from "react";
import AccordianCell from "@/components/accordianCell";
import faqData from '../../public/data/faqs.json'


export default function Faqs() {
    return (
        <div className="grid grid-cols-1 w-full">
            <div className="text-center text-[21px]">
            <h2>Frequently Asked Questions</h2>
            <br></br>
            </div>


        <div>
        {faqData.map((faq, index) => (
                <AccordianCell key={index} faq={faq}></AccordianCell>
            ))}
        </div>

        </div>
    )
}
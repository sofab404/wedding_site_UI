"use client"
import React, {useRef} from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import StoryCard from "@/components/storyCard";
import storyCards from '../../public/data/storyCards.json'

export default function OurStory() {
    const myCarouselRef = useRef(null);

    const scrollLeft = () => {
        const width = myCarouselRef.current.clientWidth - 400;
        myCarouselRef.current.scrollLeft -= width;
    }

    const scrollRight= () => {
        const width = myCarouselRef.current.clientWidth - 400;
        myCarouselRef.current.scrollLeft += width;
    }
    return (


        <div className="relative w-full max-w-3xl mx-auto">
        <h2 className="text-center text-[30px]">Our Love Story</h2>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 scrollbar-none touch-pan-x" ref={myCarouselRef}>
                    {storyCards.map((card, index) => (
                        <div key={index} className="snap-center flex-shrink-0">
                        <StoryCard image={card.image} content={card.content} date={card.date}></StoryCard>
                        </div>
                        
                    ))}
            </div>
            <SlArrowLeft size={30} onClick={scrollLeft} className="absolute -left-10 top-1/2 transform -translate-y-1/2 rounded-full shadow cursor-pointer"></SlArrowLeft>
            <SlArrowRight size={30} onClick={scrollRight} className="absolute -right-10 top-1/2 transform -translate-y-1/2 rounded-full shadow cursor-pointer"></SlArrowRight>
        </div>
    )
}
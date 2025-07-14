import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="place-self-center">
          <Image
            height={270}
            width={700}
            src="/images/home_page_photo.png"
            alt="Marriage Pic"
          ></Image>
        </div>

        <div className="grid grid-row-3 grid-cols-3 place-self-center text-[5vw] text-pink-300"> 

          
          <div className="self-end pl-[calc(50%)]">
            SOHEL
          </div>
          <div></div>
          <div></div>

          <div></div>
          <div className="place-self-center"> 
            &
          </div>
          <div></div>

          <div></div>
          <div className="self-top pl-[calc(50%)]"> 
            FABLIHA
          </div>
          <div></div>

        </div>


          {/* <div className="grid grid-rows-subgrid grid-row-3 gap-4 place-self-stretch text-[65px] text-pink-300">
            <div>
              SOHEL
            </div>
            <div>
              &
            </div>
            <div>
              FABLIHA
            </div>
          </div>   


        </div> */}       




      </div>
    </>
  );
};

export default HomeComponent;

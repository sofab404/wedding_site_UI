import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <>
      <div className="grid grid-row-2 md:grid-cols-2">
        <div className="place-self-end">

          <img class="object-contain" src="/images/home_page_photo.png" />
        </div>

        <div className="grid grid-row-3 grid-cols-3 place-self-center text-[5vw] text-pink-400"> 

          
          <div className="self-end pl-[calc(50%)]">
            SOHEL
          </div>
          <div></div>
          <div></div>

          <div></div>
          <div className="place-self-center p-4"> 
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

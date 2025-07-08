import React from "react";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Image
            height={270}
            width={600}
            src="/images/home_page_photo.png"
            alt="Marriage Pic"
          ></Image>
        </div>

        <div className="grid grid-cols-3 gap-1 text-[65px]">
          <div className="col-start-1 row-start-1 content-end text-pink-300">
            SOHEL
          </div>
          <div className="col-start-2 row-start-2 content-start text-pink-300">
            &
          </div>
          <div className="col-start-2 row-start-2 content-center text-pink-300">
            FABLIHA
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

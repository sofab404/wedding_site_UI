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

        <div className="grid grid-cols-3 gap-1 text-[65px] font-bold">
          <div className="col-start-1 row-start-2 content-start">SOHEL</div>
          <div className="row-start-2 content-center">&</div>
          <div className="col-start-3 row-start-2 content-end">FABLIHA</div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

import React from "react";

const TestComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <img src="images/home_page_photo.png"></img>
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

export default TestComponent;

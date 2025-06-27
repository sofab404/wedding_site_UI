import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="font-[March_Rough] text-[22px] font-bold flex gap-16">
        <div className="flex-auto cursor-pointer">
          <a href="/">Home</a>
        </div>
        <div className="flex-none cursor-pointer">
          <a href="/story">Our Story</a>
        </div>
        <div className="flex-auto cursor-pointer">
          <a href="/rsvp">RSVP</a>
        </div>
        <div className="flex-auto cursor-pointer">
          <a href="/details">Details</a>
        </div>
        <div className="flex-auto cursor-pointer">
          <a href="/registry">Registry</a>
        </div>
        <div className="flex-auto cursor-pointer">
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

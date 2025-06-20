import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="font-[March_Rough] text-[22px] font-bold flex gap-16">
        <div className="flex-none">
          <a href="/story">Our Story</a>
        </div>
        <div className="flex-auto">
          <a href="/rsvp">RSVP</a>
        </div>
        <div className="flex-auto">
          <a href="/details">Details</a>
        </div>
        <div className="flex-auto">
          <a href="/registry">Registry</a>
        </div>
        <div className="flex-auto">
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

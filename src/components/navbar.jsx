import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="text-[15px] md:text-[22px] flex gap-4 md:gap-16">
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
          <a href="/faqs">FAQs</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

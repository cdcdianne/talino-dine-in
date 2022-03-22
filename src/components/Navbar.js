import React, { useState } from "react";
import logo from "../img/logo.svg";
import { ChevronLeftIcon } from "@heroicons/react/outline";

function Navbar({ toggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset < 80 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  return (
    <div
      className={`fixed w-full py-5 z-20 transition duration-200 ${
        isScrolled && "bg-yellow"
      }`}
    >
      <div className="relative flex md:justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="float-left absolute left-5 rounded-lg p-2 shadow-md cursor-pointer md:hidden">
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </div>
        <div className="text-center mx-auto md:mx-0">
          <img src={logo} alt="" className="h-6 md:h-8" />
        </div>
        <div className="font-raleway font-semibold hidden md:flex gap-5 items-center text-white">
          <p>Book a Chef</p>
          <p>Partner with us</p>
          <p>FAQs</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

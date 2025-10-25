import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";

const FloatingContactButton = () => {
  const [show, setShow] = useState(false)
  return (
    <a
      href="tel:+919998069806"
      className="fixed bottom-4 right-4 md:bottom-20 md:right-10 bg-red-600 hover:bg-red-700 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300"
      style={{ zIndex: 1000 }}
    >
      <BiPhoneCall className="text-lg md:text-2xl"  />
      <span className="hidden sm:inline">Contact </span>
    </a>
  );
};

export default FloatingContactButton;

"use client";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MenuLink } from "./MenuLink";

export const UserNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button
        className="flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu />
        <FaRegUser />
      </button>
      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          <MenuLink
            label="Log in"
            onClick={() => console.log("Clicked Button")}
          />
          <MenuLink
            label="Sign up"
            onClick={() => console.log("Clicked Button")}
          />
        </div>
      )}
    </div>
  );
};

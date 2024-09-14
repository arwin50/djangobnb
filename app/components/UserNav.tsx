import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export const UserNav = () => {
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center space-x-2">
        <RxHamburgerMenu />
        <FaRegUser />
      </button>
    </div>
  );
};

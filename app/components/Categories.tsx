import React from "react";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

export const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-1 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 ">
        <LiaSwimmingPoolSolid className="scale-x-[-1]" size={25} />
        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-1 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 ">
        <LiaSwimmingPoolSolid className="scale-x-[-1]" size={25} />
        <span className="text-xs">Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-1 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 ">
        <LiaSwimmingPoolSolid className="scale-x-[-1]" size={25} />
        <span className="text-xs">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-1 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100 ">
        <LiaSwimmingPoolSolid className="scale-x-[-1]" size={25} />
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer ${className} text-center`}
    >
      {label}
    </div>
  );
};

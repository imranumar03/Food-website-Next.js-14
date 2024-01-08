import React from "react";

interface ButtonProps {
  className: string;
}
const Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <button
      className={`${className} border-pinkish border  lg:text-[15px] p-1 lg:w-[36%] w-36 rounded-full`}
    >
      <p className=" "> ADD TO CART</p>
    </button>
  );
};

export default Button;

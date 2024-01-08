import React from "react";
import Image from "next/image";
import { BsPlus } from "react-icons/bs";

interface propsType {
  keyValue: number;
  img: string;
  title: string;
  desc: string;
}

const ProCard: React.FC<propsType> = ({ img, title, desc, keyValue }) => {
  return (
    <div
      key={keyValue}
      className="flex  border  border-gray-300 cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="px-4 border border-gry-200  max-w[200px]">
        <div>
          <Image
            className="w-full h-auto"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
        </div>

        <div className="spacing-y-2 py-2">
          <h2 className="font-semibold text-[18px] uppercase flex">
            {title}
            <div className="ml-auto">
              <button className="bg-pinkish  text-white text-[15px] hover:text-masturd cursor-pointer hover:border-pinkish p-2 mr-3 rounded-full">
                <BsPlus />
              </button>
            </div>
          </h2>
          <p className="text-gray-500 text-[12px] max-w-[150px]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProCard;

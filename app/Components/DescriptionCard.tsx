import React from "react";
import Image from "next/image";

interface propsType {
  keyValue: number;
  img: string;
  title: string;
  desc: string;
}

const DescriptionCard: React.FC<propsType> = ({
  keyValue,
  img,
  title,
  desc,
}) => {
  return (
    <div
      key={keyValue}
      className="flex  border  border-gray-300 cursor-pointer transition-transform transform hover:scale-95"
    >
      <Image src={img} width={70} height={20} alt={title} className="p-2" />

      <div className="flex flex-col px-5">
        <p className="font-semibold pt-2 text-center text-[18px]">{title}</p>
        <p className="text-gray-600 p-2">{desc}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;

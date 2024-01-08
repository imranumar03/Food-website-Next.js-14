import React from "react";
import Image from "next/legacy/image";
import Button from "./Button";

interface propsType {
  keyValue: number;
  img: string;
  title: string;
  desc: string;
  price: string;
}

const ScrollCard: React.FC<propsType> = ({
  keyValue,
  img,
  title,
  desc,
  price,
}) => {
  return (
    <div
      key={keyValue}
      className="flex p-3 cursor-pointer transition-transform transform hover:scale-95 border-b"
    >
      <div className="w-full md:w-[100px] ">
        <Image
          src={img}
          width={100}
          height={90}
          alt={title}
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col px-5">
        <p className="font-semibold text-[18px]">{title}</p>
        <p className="text-gray-600">{desc}</p>
        <p className="flex w-full items-center justify-between gap-10 text-masturd">
          Rs{price}
          <Button className="hover:text-masturd cursor-pointer hover:border-masturd " />
        </p>
      </div>
    </div>
  );
};

export default ScrollCard;

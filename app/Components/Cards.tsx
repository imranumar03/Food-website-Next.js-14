import React from "react";
import Image from "next/image";

import ProCard from "./ProCard";
const productArray = [
  {
    img: "/burger-1.png",
    title: "Burger",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Pizza",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Brbq",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Snaks",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Sandwich",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Sweet",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Sweet",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
  {
    img: "/burger-1.png",
    title: "Sweet",
    desc: "Mutton Doubleton and Stuffed Cheese patty Fun",
  },
];
const Cards = () => {
  return (
    <div className="">
      <h2 className="text-center p-3 text-3xl w-full font-bold">
        Popular Products
      </h2>
      <p className="text-norml text-gray-600 w-full text-center">
        See all our popular products in this week
      </p>
      <div className="flex flex-wrap row-start-3 gap-1 p-10 ml-7 ">
        {productArray.map((item, index) => (
          <ProCard
            keyValue={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;

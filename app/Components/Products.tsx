import React from "react";
import DescriptionCard from "./DescriptionCard";
const productArray = [
  {
    img: "/png1.png",
    title: "Burger",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/png2.png",
    title: "Pizza",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit .",
  },
  {
    img: "/png3.png",
    title: "Brbq",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/png4.jpg",
    title: "Snaks",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/png5.png",
    title: "Sandwich",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    img: "/png6.png",
    title: "Sweet",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const Products = () => {
  return (
    <div className="">
      <h2 className="text-center p-3 text-3xl font-bold">
        Featured Catogeries
      </h2>
      <p className="text-norml text-gray-600 text-center">
        Choose your necessory products from this feature categories
      </p>
      <div className="md:flex md:flex-wrap  md:row-start-3 gap-1 p-10 md:ml-16">
        {productArray.map((item, index) => (
          <DescriptionCard
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

export default Products;

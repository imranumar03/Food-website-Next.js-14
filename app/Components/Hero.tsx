import React from "react";
import Image from "next/image";
import ScrollCard from "./ScrollCard";
const descriptionArray = [
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
  {
    img: "/desperado.jpg",
    title: "Surprise Treets",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "1650",
  },
];
const Hero = () => {
  return (
    <div className="container mx-auto justify-evenly flex px-5 md:py-12 py-0 md:flex-row  flex-col items-center">
      <div className="w-full md:w-1/2">
        <Image
          className="transition-transform transform hover:scale-105 w-auto"
          src="/img-1.jpeg"
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>
      <div className="w-full md:w-1/2  border overflow-y-auto h-96 border-gray-300">
        <h2 className="w-full font-semibold text-[20px] py-3 text-center  bg-masturd mb-5">
          Latest Deals And Permotions
        </h2>
        {descriptionArray.map((item, index) => (
          <ScrollCard
            keyValue={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

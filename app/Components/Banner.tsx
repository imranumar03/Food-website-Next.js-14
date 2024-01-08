import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-masturd md:max-w-[70%] m-auto w-[80%]  p-3 rounded-lg shadow-lg flex items-center">
      {/* <!-- Left Side (Image and Description) --> */}

      {/* <!-- Centered Description --> */}
      <div className="text-pretty ">
        <h2 className="font-bold  text-[20px] text-pinkish">
          QUICK DELIVERY TO YOUR HOME
        </h2>
        <p className="text-gray-100  text-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          voluptatem laborum aspernatur veritatis dignissimos! Odit! adipisicing
          elit. Dolorem voluptatem Odit!
        </p>
        <div className="ml-auto pt-4">
          <button className="bg-pinkish  text-masturd text-[15px] hover:text-slate-700 cursor-pointer hover:border-pinkish px-4 py-2 rounded-full">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* <!-- Right Side (Button) --> */}

      <div className="flex-shrink-0 hidden md:block md:-mr-2.5">
        <Image
          src="/5th.png"
          alt="Image"
          width={300}
          height={200}
          className=" md:-mt-8  "
        />
      </div>
    </div>
  );
};

export default Banner;

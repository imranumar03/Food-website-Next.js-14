import React from "react";
import Image from "next/legacy/image";
const Bnner = () => {
  return (
    <div className="bg-pinkish md:max-w-[80%]  w-[90%]  m-auto md:max-h-[40px]  md:p-8 md:mt-8 rounded-lg shadow-lg md:flex md:items-center">
      {/* <!-- Left Side (Image and Description) --> */}
      <div className="flex-shrink-0 md:w-[20%] hidden md:block md:-mt-5 mr-4 ">
        <Image
          src="/burger-1.png"
          alt="Image"
          width={100}
          height={90}
          objectFit="cover"
          className=" drop-shadow-2xl"
        />
      </div>

      {/* <!-- Centered Description --> */}
      <div className="text-center  mt-4">
        <h2 className="lg:text-lg w-full text-[12px] md:text-xs  text-white">
          100% NATURAL QUALITY ORGANIC PRODUCT
        </h2>
        <p className="text-gray-100 w-full my-2  sm:text-[9px]">
          See Our Latest Discounted Products From Here And Get A Special
          Discount Product
        </p>
      </div>

      {/* <!-- Right Side (Button) --> */}
      <div className="ml-auto">
        <button className="bg-masturd my-3 w-[70%] md:w-[100%] md:ml-8 lg:mx-0 md:mx-2 text-white text-[15px]  hover:text-pinkish cursor-pointer hover:border-pinkish px-4 py-2 rounded-full">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Bnner;

import React from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NavBaar = () => {
  return (
    <div className="col-1 hidden  md:block w-full justify-center">
      <div className="w-full h-[70px] bg-pinkish flex  items-center justify-evenly">
        <Image
          className="transition-transform transform hover:scale-105"
          src="/logo.png"
          width={150}
          height={100}
          alt="Picture of the author"
          loading="eager" // Set the loading attribute to eager
        />

        <div className="w-full sm:w[300px] md:w-[50%]  relative">
          <input
            className="border-gray-200 border p-2 px-4 bg-pinkish placeholder-white rounded-lg w-full"
            type="text"
            placeholder="search product"
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-200 transition-transform transform hover:scale-105"
            size={20}
          />
        </div>
        <div className="hidden md:flex gap-4 text-gray-100 text-[12px] ">
          <BiUser
            size={30}
            className=" transition-transform transform hover:scale-105"
          />
          <div className="relative  transition-transform transform hover:scale-105">
            <FiHeart size={30} />
            <p className="bg-red-600 absolute top-0 rounded-full right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1  transition-transform transform hover:scale-105">
              0
            </p>
          </div>
          <div className="relative  transition-transform transform hover:scale-105">
            <HiOutlineShoppingBag size={30} />
            <p className="bg-red-600 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1  transition-transform transform hover:scale-105">
              0
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white shadow h-10 flex gap-10 lg:pl-36 pt-2 md:pl-14">
        <p className=" hover:text-accent cursor-pointer hover:border-b-4 border-accent">
          HOME
        </p>
        <p className=" hover:text-accent cursor-pointer hover:border-b-4 border-accent">
          MEMBERSHIP
        </p>
        <p className=" hover:text-accent cursor-pointer hover:border-b-4 border-accent">
          CONTACT
        </p>
        <p className=" hover:text-accent cursor-pointer hover:border-b-4 border-accent">
          ORDER
        </p>
        <p className=" hover:text-accent cursor-pointer hover:border-b-4 border-accent">
          CART
        </p>
      </div>
    </div>
  );
};

export default NavBaar;

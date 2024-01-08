import React from "react";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className="  md:justify-evenly w-full   p-10 py-10  md:flex md:w-full">
      <div className=" mx-10 text-center justify-center">
        <h2 className="text-lg font-bold pb-3">Support</h2>
        <p className="py-1"> Home </p>
        <p className="py-1"> Work </p>
        <p className="py-1"> Element </p>
        <p className="py-1"> Comtact </p>
      </div>
      <div className=" md:pl-10 text-center justify-center">
        <h2 className="text-lg font-bold pb-3">Accounts</h2>
        <p className="py-1"> eGrappler.com </p>
        <p className="py-1"> greepit.com </p>
        <p className="py-1"> wordpress.com </p>
        <p className="py-1"> themeforest.com </p>
      </div>
      <div className=" md:pl-10 text-center justify-center">
        <h2 className="text-lg font-bold pb-3">Quick-Links</h2>
        <p className="py-1"> eGrappler.com</p>
        <p className="py-1"> greepit.com</p>
        <p className="py-1"> wordpress.com </p>
        <p className="py-1"> themeforest.com </p>
      </div>
      <div className=" w-50 h-50 text-center justify-center">
        <h2 className="font-bold text-lg md:pl-10">Download App</h2>
        <p className="text-normal text-gray-600 pb-3">
          save 20$ with App & New User Only
        </p>

        <Image
          src="/qr-code.png"
          alt="Image"
          width={100}
          height={90}
          objectFit="cover"
          className=" "
        />
        <Image
          src="/apps.png"
          alt="Image"
          width={100}
          height={90}
          objectFit="cover"
          className=""
        />
      </div>
    </div>
  );
};

export default Footer;

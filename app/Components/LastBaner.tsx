import React from "react";
import Image from "next/image";
const LastBaner = () => {
  return (
    <div>
      <Image
        src="/last.jpeg"
        alt="Image"
        width={1300}
        height={800}
        objectFit="contain"
        className="ml-5 "
      />
    </div>
  );
};

export default LastBaner;

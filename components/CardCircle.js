import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardCircle = ({ title, link, imgsrc, clr }) => {
  return (
    <Link href={link} className="flex-1">
      <a>
        <div
          className={`relative text-center overflow-hidden h-24 sm:h-40 w-24 sm:w-40 rounded-full border-[4px] sm:border-[7px] ${clr}  mx-4`}
        >
          <Image
            className=" w-full h-full hover:scale-110 transition duration-300 ease-in-out"
            src={imgsrc}
            alt="product"
            layout="fill"
            objectFit="contain"
            quality="25"
          />
        </div>
        <div className="text-sm sm:text-base text-center my-2 font-semibold text-gray-800 uppercase">
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default CardCircle;

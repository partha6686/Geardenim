import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="px-1 py-2 sm:p-4 lg:w-1/4 w-1/2">
      <div className="w-full max-w-xs mx-auto rounded-lg shadow-lg border-2 border-cust_gray bg-cust_white">
        <div className="relative text-center overflow-hidden h-60 w-full border-b-4 border-cust_light">
          <Image
            className=" w-full h-full"
            src="/product_1.jpg"
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="p-4  m-0 text-center">
          <p className="text-xs sm:text-base font-bold text-cust_green">
            Kawasaki
          </p>
          <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1">
            <Link href={"/product/mens-formal-trousers"}>
              <a>Men's Formal Trousers</a>
            </Link>
          </h3>
          <h2 className="text-xl font-semibold text-cust_dark my-1 sm:my-2">
            ₹ 12000
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

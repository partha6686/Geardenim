import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const HistoryProducs = () => {
  return (
    <div className="py-2">
      <div className="flex flex-row">
        <div className="relative h-24 w-24 overflow-hidden m-2">
          <Image
            className=" w-full h-full"
            src="/product_1.jpg"
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row justify-between my-2">
          <div>
            <p className="text-xs font-semibold text-cust_light_text">KTM</p>
            <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1 font-semibold">
              <Link href={"/product/mens-formal-trousers"}>
                <a>The Catcher in the Rye 1</a>
              </Link>
            </h3>
            <div className="flex flex-col sm:flex-row ">
              <p className="mr-6">Size: X</p>
              <div>
                <p>Qty: 1</p>
              </div>
            </div>
          </div>
          <div className="mr-4">
            <h2 className="text-base sm:text-xl text-cust_dark mb-1 font-semibold">
              <span> ₹ 999 </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center m-2 font-semibold text-sm text-gray-400">
        <BsCheckCircleFill className="mr-2 text-cust_green" />
        Delivered on Aug 20, 2022
      </div>
    </div>
  );
};

export default HistoryProducs;

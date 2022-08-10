import React from "react";
import Link from "next/link";
import Image from "next/image";

const OrderCard = () => {
  return (
    <div className="relative m-2">
      <div className="flex flex-row bg-cust_white rounded-lg border-2 border-cust_grey shadow-md">
        <div className="relative h-32 w-32 overflow-hidden m-2">
          <Image
            className=" w-full h-full"
            src="/product_1.jpg"
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow my-2">
          <p className="text-xs font-semibold text-cust_light_text">KTM</p>
          <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1">
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
          <div className="my-3">
            <h2 className="text-base sm:text-xl text-cust_dark mb-1">
              <span> ₹ 999 </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

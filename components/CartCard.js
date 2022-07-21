import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const CartCard = () => {
  return (
    <div className="relative m-2">
      <div className="flex flex-row bg-cust_white rounded-lg border-2 border-cust_grey shadow-md">
        <div className="relative h-40 w-40 overflow-hidden m-2">
          <Image
            className=" w-full h-full"
            src="/product_1.jpg"
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow my-2">
          <p className="text-xs font-semibold text-cust_light_text">Kawasaki</p>
          <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1">
            <Link href={"/product/mens-formal-trousers"}>
              <a>Men's Formal Trousers</a>
            </Link>
          </h3>
          <div className="flex flex-col sm:flex-row ">
            <p className="mr-6">Size: M</p>
            {/*<div className="flex items-center justify-center ml-2 text-lg font-semibold mr-8">
              <BsFillArrowLeftCircleFill className="text-cust_green cursor-pointer" />
              <span className="mx-1">M</span>
              <BsFillArrowRightCircleFill className="text-cust_green cursor-pointer" />
            </div>*/}
            <div className="flex">
              <p>Qty: </p>
              <div className="flex items-center justify-center mx-2 text-lg font-semibold">
                <AiFillMinusCircle className="text-cust_green cursor-pointer text-xl" />
                <span className="mx-2">1</span>
                <AiFillPlusCircle className="text-cust_green cursor-pointer text-xl" />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-cust_dark my-1 sm:my-2">
            ₹ 1200
          </h2>
          <p className="text-cust_light_text">
            Delivery By{" "}
            <span className="text-cust_dark font-semibold">26 Jul 2022</span>
          </p>
        </div>
        <AiOutlineClose className="cursor-pointer text-xs sm:text-lg md:text-xl absolute right-3 top-3" />
      </div>
    </div>
  );
};

export default CartCard;

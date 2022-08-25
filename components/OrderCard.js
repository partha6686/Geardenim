import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCheckCircleFill, BsInfoCircleFill } from "react-icons/bs";
import { capitalize } from "lodash";

const OrderCard = ({ product }) => {
  return (
    <div className="relative m-2">
      <div className="bg-cust_white rounded-lg border-2 border-cust_grey shadow-md my-4">
        <div className="flex flex-row">
          <div className="relative h-32 w-32 overflow-hidden m-2">
            <Image
              className=" w-full h-full"
              src={product.pImg}
              alt="product"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-grow my-2">
            <p className="text-xs font-semibold text-cust_light_text">
              {product.brand}
            </p>
            <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1">
              <Link href={`/product/${product.slug}`}>
                <a>{product.name}</a>
              </Link>
            </h3>
            <div className="flex flex-col sm:flex-row ">
              <p className="mr-6">Size: {product.size}</p>
              <div>
                <p>Qty: {product.qty}</p>
              </div>
            </div>
            <div className="my-3">
              <h2 className="text-base sm:text-xl text-cust_dark mb-1 font-semibold">
                <span>₹ {product.price} </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2 mb-3 mx-4 font-semibold text-sm text-gray-400">
          {product.status == "delivered" ? (
            <BsCheckCircleFill className="mr-2 text-cust_green text-lg" />
          ) : (
            <BsInfoCircleFill className="mr-2 text-cust_green text-lg" />
          )}
          {/*Delivered on Aug 20, 2022*/}
          {capitalize(product.status)}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

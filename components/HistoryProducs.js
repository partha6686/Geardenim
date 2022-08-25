import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCheckCircleFill, BsInfoCircleFill } from "react-icons/bs";
import { capitalize } from "lodash";

const HistoryProducs = ({ product }) => {
  return (
    <div className="py-2">
      <div className="flex flex-row">
        <div className="relative h-24 w-24 overflow-hidden m-2">
          <Image
            className=" w-full h-full"
            src={product.pImg}
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow flex flex-col sm:flex-row justify-between my-2">
          <div>
            <p className="text-xs font-semibold text-cust_light_text">
              {product.brand}
            </p>
            <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1 font-semibold">
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
          </div>
          <div className="mr-4">
            <h2 className="text-base sm:text-xl text-cust_dark mb-1 font-semibold">
              <span> ₹ {product.price} </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center m-2 font-semibold text-sm text-gray-400">
        {product.status == "delivered" ? (
          <BsCheckCircleFill className="mr-2 text-cust_green text-lg" />
        ) : (
          <BsInfoCircleFill className="mr-2 text-cust_green text-lg" />
        )}
        {/*Delivered on Aug 20, 2022*/}
        {capitalize(product.status)}
      </div>
    </div>
  );
};

export default HistoryProducs;

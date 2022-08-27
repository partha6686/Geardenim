import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  return (
    <div className="px-1 py-2 sm:p-4 lg:w-1/4 w-1/2">
      <Link href={`/product/${product.slug}`}>
        <div className="w-full max-w-xs mx-auto rounded-lg shadow-lg border-2 border-cust_grey bg-cust_white cursor-pointer">
          <div className="relative text-center overflow-hidden h-60 w-full border-b-4 border-cust_light">
            <Image
              className=" w-full h-full"
              src={product.img}
              alt="product"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative">
            {product.availability.filter((item) => item.qty > 0).length ==
              0 && (
              <div className="absolute right-0 bottom-0 px-2 py-1 bg-rose-200">
                <p className="text-rose-600 font-bold text-xs">OUT OF STOCK</p>
              </div>
            )}
          </div>
          <div className="p-4  m-0 text-center">
            <p className="text-sm sm:text-base font-semibold text-cust_dark">
              {product.brand}
            </p>
            <h3 className="text-xs sm:text-base text-cust_light_text mb-1">
              {product.title}
            </h3>
            <h2 className="text-lg font-semibold text-cust_dark my-1 sm:my-2">
              <span> ₹ {product.price} </span>
              <span className="mx-1 line-through text-cust_green">
                ₹ {product.mrp}
              </span>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;

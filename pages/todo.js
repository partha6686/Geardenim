import React from "react";
import Link from "next/link";
import Image from "next/image";

const todo = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center h-[85vh] min-h-fit">
      <div className="container bg-white mx-auto w-11/12 max-w-lg text-center pt-16 pb-12 rounded-lg shadow-lg">
        <div className="relative text-center w-full h-full">
          <Image
            src="/under_const.png"
            alt="product"
            height={240}
            width={240}
          />
        </div>
        <h1 className="text-lg sm:text-xl font-bold mt-4 mb-1 text-gray-800">
          Page is under construction
        </h1>
        <p className="text-gray-500 max-w-xs sm:max-w-sm m-auto">
          The page you are trying to visit is under construction. Please try
          again later.
        </p>
        <div className="mt-4 text-cust_green font-bold text-xl">
          COMMING SOON
        </div>
      </div>
    </div>
  );
};

export default todo;

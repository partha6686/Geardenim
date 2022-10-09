import React from "react";
import Card from "./Card";
import Link from "next/link";
import UnderLine from "./UnderLine";

const BestDealsIndex = ({ products }) => {
  return (
    <div className="container mx-auto sm:p-5 py-4 my-4">
      <h1 className="text-xl sm:text-3xl font-bold mx-1 sm:mx-6 mt-2 sm:mt-4 text-gray-800 text-center font-['Josefin_Sans']">
        BEST DEALS
      </h1>
      <UnderLine />
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/best-deals">
          <button className="px-6 py-2 border-solid border-cust_green border font-semibold text-cust_green hover:bg-cust_green hover:text-white mt-6 mb-2 ">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestDealsIndex;

import React from "react";
import Link from "next/link";
import HistoryProducs from "./HistoryProducs";

const HistoryCards = () => {
  return (
    <div className="bg-white rounded-lg border-2 my-6 mx-2 shadow-md">
      <div className="flex items-center justify-between border-b-2">
        <div className="flex-grow flex justify-between sm:justify-start items-center">
          <div className="m-3 sm:m-6 text-sm sm:text-base">
            <h3 className="font-semibold">Order Number</h3>
            <p className="">#JDCF4930</p>
          </div>
          <div className="m-3 sm:m-6 text-sm sm:text-base">
            <h3 className="font-semibold">Date Placed</h3>
            <p className="">AUG 11,2022</p>
          </div>
          <div className="m-3 sm:m-6 text-sm sm:text-base hidden sm:inline-block">
            <h3 className="font-semibold">Total Amount</h3>
            <p className="font-bold"> ₹ 12345</p>
          </div>
        </div>
        <div className="mx-6 hidden sm:inline-block">
          <Link href={"/order/JDCF4930"}>
            <a className="font-bold text-sm px-4 py-2 border-2 text-cust_green hover:border-cust_green">
              VIEW ORDER
            </a>
          </Link>
        </div>
      </div>

      <div className="relative m-2 divide-y-2">
        <HistoryProducs />
        <HistoryProducs />
      </div>

      <div className="flex sm:hidden justify-between items-center border-t-2">
        <div className="m-3 sm:m-6 text-sm sm:text-base">
          <h3 className="font-semibold">Total Amount</h3>
          <p className="font-bold"> ₹ 12345</p>
        </div>
        <div className="mx-6">
          <Link href={"/order/JDCF4930"}>
            <a className="font-bold text-xs px-2 py-1 border-2 text-cust_green hover:border-cust_green">
              VIEW ORDER
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HistoryCards;

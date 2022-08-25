import React from "react";
import Link from "next/link";
import HistoryProducs from "./HistoryProducs";

const HistoryCards = ({ order }) => {
  return (
    <div className="bg-white rounded-lg border-2 my-6 mx-2 shadow-md">
      <div className="flex items-center justify-between border-b-2">
        <div className="flex-grow flex justify-between md:justify-start items-center">
          <div className="m-3 sm:m-6 text-sm sm:text-base">
            <h3 className="font-semibold">Order Number</h3>
            <p className="text-sm lg:text-base">
              #{order.orderId.split("_")[1]}
            </p>
          </div>
          <div className="m-3 sm:m-6 text-sm sm:text-base">
            <h3 className="font-semibold">Date Placed</h3>
            <p className="text-sm lg:text-base">
              {order.createdAt.slice(0, 10).split("-").reverse().join("-")}
            </p>
          </div>
          <div className="m-3 sm:m-6 text-sm sm:text-base hidden md:inline-block">
            <h3 className="font-semibold">Total Amount</h3>
            <p className="font-bold text-sm lg:text-base"> ₹ {order.amount}</p>
          </div>
        </div>
        <div className="mx-6 hidden md:inline-block">
          <Link href={`/order/${order.orderId}`}>
            <a className="font-bold text-sm px-4 py-2 border-2 text-cust_green hover:border-cust_green">
              VIEW ORDER
            </a>
          </Link>
        </div>
      </div>

      <div className="relative m-2 divide-y-2">
        {order.products.map((product) => (
          <HistoryProducs key={product.id} product={product} />
        ))}
      </div>

      <div className="flex md:hidden justify-between items-center border-t-2">
        <div className="m-3 sm:m-6 text-sm sm:text-base">
          <h3 className="font-semibold">Total Amount</h3>
          <p className="font-bold"> ₹ {order.amount}</p>
        </div>
        <div className="mx-6">
          <Link href={`/order/${order.orderId}`}>
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

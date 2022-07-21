import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import CartCard from "../components/CartCard";

const Cart = () => {
  return (
    <div className="bg-cust_light ">
      <div className="container mx-auto lg:px-24 py-4">
        <h1 className="text-2xl font-bold m-2">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="w-full md:w-5/12">
            <div className="bg-cust_white p-3 m-2 rounded-md">
              <h2 className="mb-4">PRICE DETAILS (5 Items)</h2>
              <p className="float-left text-cust_light_text">Total MRP</p>
              <p className="float-right text-cust_dark"> ₹ 1200</p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-cust_light_text">Discount on MRP</p>
              <p className="float-right text-cust_dark">- ₹ 1200</p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-cust_light_text">Coupom Discount</p>
              <p className="float-right cursor-pointer text-cust_green">
                Add Coupon
              </p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-cust_light_text">Delivery Charge</p>
              <p className="float-right text-cust_dark">₹ 10</p>
              <p className="clear-both mb-2"></p>
              <hr className=" text-cust_grey mb-3" />
              <p className="float-left text-cust_light_text">Total Amount</p>
              <p className="float-right text-cust_dark">₹ 10</p>
              <p className="clear-both mb-2"></p>
              <Link href={"/checkout"}>
                <button className="w-full h-10 bg-cust_green text-center my-3 text-cust_white font-semibold ">
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

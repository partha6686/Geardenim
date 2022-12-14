import React, { useContext } from "react";
import Link from "next/link";
import CartCard from "../components/CartCard";
import { BsBagCheckFill } from "react-icons/bs";
import { CartContext } from "../store/CartState";
import Image from "next/image";
import Head from "next/head";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Cart - Geardenim.com</title>
      </Head>
      {cartCtx.cart.length > 0 ? (
        <div className="bg-cust_light min-h-screen">
          <div className="container mx-auto lg:px-24 py-4">
            <h1 className="text-lg sm:text-2xl font-bold mx-2 my-2 sm:my-4 text-gray-800">
              SHOPPING CART
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow">
                {cartCtx.cart &&
                  cartCtx.cart.map((item) => (
                    <CartCard key={item.id} cartItem={item} />
                  ))}
              </div>
              <div className="w-full md:w-5/12">
                <div className="bg-cust_white p-3 m-2 rounded-md shadow-lg">
                  <h2 className="mb-4">
                    PRICE DETAILS ({cartCtx.cart.length} Items)
                  </h2>
                  <p className="float-left text-cust_light_text">Total MRP</p>
                  <p className="float-right text-cust_dark">
                    {" "}
                    ₹ {cartCtx.totalAmt.mrpAmt}
                  </p>
                  <p className="clear-both mb-2"></p>
                  <p className="float-left text-cust_light_text">
                    Discount on MRP
                  </p>
                  <p className="float-right text-cust_dark">
                    - ₹ {cartCtx.totalAmt.dis}
                  </p>
                  <p className="clear-both mb-2"></p>
                  <p className="float-left text-cust_light_text">
                    Coupon Discount
                  </p>
                  <p className="float-right cursor-pointer text-cust_green">
                    Add Coupon
                  </p>
                  <p className="clear-both mb-2"></p>
                  <p className="float-left text-cust_light_text">
                    Delivery Charge
                  </p>
                  <p className="float-right text-cust_dark">
                    ₹ {cartCtx.totalAmt.dC}
                  </p>
                  <p className="clear-both mb-2"></p>
                  <hr className=" text-cust_grey mb-3" />
                  <p className="float-left text-cust_light_text">
                    Total Amount
                  </p>
                  <p className="float-right text-cust_dark">
                    ₹ {cartCtx.totalAmt.total}
                  </p>
                  <p className="clear-both mb-2"></p>
                  <Link href={"/checkout"}>
                    <button
                      disabled={cartCtx.cart.length == 0 ? true : false}
                      className="w-full h-11 disabled:bg-emerald-200 bg-cust_green my-3 text-cust_white font-semibold flex justify-center items-center"
                    >
                      <BsBagCheckFill className="text-lg mx-1" />
                      <p>PLACE ORDER</p>
                    </button>
                  </Link>
                  <div
                    className="text-end text-gray-500 font-semibold cursor-pointer hover:text-rose-600"
                    onClick={() => cartCtx.clearCart()}
                  >
                    Clear Cart
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;

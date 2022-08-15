import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { CartContext } from "../store/CartState";

const CartCard = (props) => {
  const cartCtx = useContext(CartContext);
  const { cartItem } = props;
  const handleRemove = () => {
    cartCtx.removeFromCart(cartItem);
  };

  const handleIncQty = () => {
    cartCtx.addToCart(cartItem);
  };

  const handleDecQty = () => {
    cartCtx.decProductQty(cartItem);
  };

  return (
    <div className="relative m-2">
      <div className="flex flex-row bg-white rounded-lg border-2 border-gray-300 shadow-md">
        <div className="relative h-40 w-40 overflow-hidden m-2">
          <Image
            className=" w-full h-full"
            src={cartItem.pImg}
            alt="product"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-grow my-2">
          <p className="text-xs font-semibold text-cust_light_text">
            {cartItem.brand}
          </p>
          <h3 className="text-sm sm:text-lg  text-cust_dark hover:text-cust_light_text mb-1">
            <Link href={`/product/${cartItem.slug}`}>
              <a>{cartItem.name}</a>
            </Link>
          </h3>
          <div className="flex flex-col sm:flex-row ">
            <p className="mr-6">Size: {cartItem.size}</p>
            <div className="flex">
              <p>Qty: </p>
              <div className="flex items-center justify-center mx-2 text-lg font-semibold">
                <AiFillMinusCircle
                  className="text-cust_green cursor-pointer text-xl"
                  onClick={handleDecQty}
                />
                <span className="mx-2">{cartItem.qty}</span>
                <AiFillPlusCircle
                  className="text-cust_green cursor-pointer text-xl"
                  onClick={handleIncQty}
                />
              </div>
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-base sm:text-xl font-semibold text-cust_dark mb-1">
              <span> ₹ {cartItem.qty * cartItem.price} </span>
              <span className="mx-3 line-through text-cust_light_text">
                ₹ {cartItem.qty * cartItem.mrp}
              </span>
              <span className="text-cust_blue">{cartItem.dis}% OFF</span>
            </h2>
            <p className="text-cust_green font-bold text-sm">
              inclusive of all taxes
            </p>
          </div>
          <p className="text-cust_light_text">
            Delivery By{" "}
            <span className="text-cust_dark font-semibold">26 Jul 2022</span>
          </p>
        </div>
        <AiOutlineClose
          className="cursor-pointer text-xs sm:text-lg md:text-xl absolute right-3 top-3"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default CartCard;

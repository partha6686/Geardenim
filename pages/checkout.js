import React, { useContext ,useEffect} from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { CartContext } from "../store/CartState";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
  }, []);

  return (
    <div className="bg-gray-50 py-4">
      <div className="container lg:px-24 mx-auto">
        <h2 className=" text-2xl font-bold my-4 text-gray-800">CHECKOUT</h2>
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex-1 m-2 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
            <h3 className="font-semibold my-3">CONTACT DETAILS </h3>
            <div className="form">
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4 mr-4 w-full">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm  text-gray-800"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm  text-gray-800"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="w-full h-20 bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4  mr-4  w-full">
                  <label
                    htmlFor="state"
                    className="leading-7 text-sm text-gray-800"
                  >
                    State
                  </label>
                  <select
                    name="state"
                    id="state"
                    defaultValue={"select"}
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option vlaue="select" disabled>
                      select
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="haryana">Haryana</option>
                    <option value="odisha">Odisha</option>
                    <option value="punjab">Punjab</option>
                  </select>
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="city"
                    className="leading-7 text-sm  text-gray-800"
                  >
                    City
                  </label>
                  <select
                    name="city"
                    id="city"
                    defaultValue={"select"}
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option vlaue="select" disabled>
                      select
                    </option>
                    <option
                      value="bhubaneswar"
                      className="checked:bg-cust_green"
                    >
                      Bhubaneswar
                    </option>
                    <option value="cuttack">Cuttack</option>
                    <option value="puri">Puri</option>
                    <option value="balangir">Balangir</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="mb-4 mr-4 w-full">
                  <label
                    htmlFor="pincode"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Pin Code
                  </label>
                  <input
                    type="tel"
                    id="pincode"
                    name="pincode"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <Link href="/order/3329050959">
                <button className="w-full h-11 bg-cust_green my-3 text-cust_white font-semibold flex justify-center items-center">
                  <BsBagCheckFill className="text-lg mx-1" />
                  <p>PAY ₹ {cartCtx.totalAmt.total}</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1 ">
            <div className="m-2 p-4 border border-gray-300  rounded-lg bg-white shadow-md">
              <h2 className="my-3 font-semibold">
                PRICE DETAILS ({cartCtx.cart.length} Items)
              </h2>
              <p className="float-left text-gray-500">Total MRP</p>
              <p className="float-right text-gray-800">
                {" "}
                ₹ {cartCtx.totalAmt.mrpAmt}
              </p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-gray-500">Discount on MRP</p>
              <p className="float-right text-gray-800">
                - ₹ {cartCtx.totalAmt.dis}
              </p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-gray-500">Coupon Discount</p>
              <p className="float-right cursor-pointer text-gray-800">- ₹ 0</p>
              <p className="clear-both mb-2"></p>
              <p className="float-left text-gray-500">Delivery Charge</p>
              <p className="float-right text-gray-800">
                ₹ {cartCtx.totalAmt.dC}
              </p>
              <p className="clear-both mb-2"></p>
              <hr className=" text-gray-300 mb-3" />
              <p className="float-left text-gray-500 font-semibold">
                Total Amount
              </p>
              <p className="float-right text-gray-800 font-semibold text-lg">
                ₹ {cartCtx.totalAmt.total}
              </p>
              <p className="clear-both mb-2"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

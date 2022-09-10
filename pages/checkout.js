import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { BsBagCheckFill, BsInfoCircle } from "react-icons/bs";
import { CartContext } from "../store/CartState";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import useForm from "../Hooks/useForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Checkout = ({ pinsJson }) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const [rzpProcessing, setRzpProcessing] = useState(null);

  const initiatePayment = async () => {
    if (rzpProcessing) {
      return;
    } else {
      setRzpProcessing(true);
      let rid = Math.floor(Math.random() * Date.now());
      let data = {
        cart: cartCtx.cart,
        subTotal: cartCtx.totalAmt.total * 100,
        rid,
        custName: values.custName,
        custAddress: `${values.address},<br/> ${values.city}, ${values.state}-${values.pincode}`,
        custPhone: values.phone,
      };
      let response = await fetch(`${process.env.HOST}generateorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: document.cookie,
        },
        body: JSON.stringify(data),
      });
      var json = await response.json();

      if (response.status == 200) {
        let options = {
          key: process.env.NEXT_PUBLIC_RZP_KEY,
          amount: json.amount,
          currency: json.currency,
          name: "Geardenim",
          description: "Gear up for the biggest ride of your life",
          image: "https://i.ibb.co/8xSfsP6/fav-geardenim-1.jpg",
          order_id: json.id,
          handler: async (response) => {
            // alert(response.razorpay_payment_id);
            let rzpData = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              order_id: json.id,
              cart: cartCtx.cart,
            };
            let rgpResponse = await fetch(`${process.env.HOST}transaction`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Cookie: document.cookie,
              },
              body: JSON.stringify(rzpData),
            });
            // let rgpJson = await rgpResponse.json();
            if (rgpResponse.status == 200) {
              router.push(`/transaction/${json.id}`);
            }
          },
          modal: {
            ondismiss: async () => {
              let rzpData = {
                order_id: json.id,
              };
              let rgpResponse = await fetch(`${process.env.HOST}cancelorder`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Cookie: document.cookie,
                },
                body: JSON.stringify(rzpData),
              });
              setRzpProcessing(false);
            },
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#50D890",
          },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
        rzp1.on("payment.failed", (response) => {
          console.log(response.error);
        });
      } else {
        if (json.cartClr) {
          cartCtx.clearCart();
        }
        toast.error(json.error, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: "select-size-error",
        });
        console.log(json);
        setRzpProcessing(false);
      }
    }
  };

  const { handleChange, values, errors, handleSubmit } =
    useForm(initiatePayment);
  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
  }, [getCookie("isLoggedIn")]);

  return (
    <>
      <Head>
        <title>Checkout - Geardenim.com</title>
      </Head>
      <div className="bg-gray-50 py-4 min-h-screen">
        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
        <div className="container lg:px-24 mx-auto">
          <h2 className=" text-2xl font-bold my-4 text-gray-800 mx-2">
            CHECKOUT
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow m-2 p-4 border border-gray-300 rounded-lg bg-white shadow-md">
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
                      name="custName"
                      className="w-full bg-white rounded border  border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={handleChange}
                      value={values.custName}
                    />
                    {errors.custName && (
                      <div className="relative">
                        <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                          <BsInfoCircle className=" mr-1 font-bold" />{" "}
                          {errors.custName}
                        </div>
                      </div>
                    )}
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
                      onChange={handleChange}
                      value={values.phone}
                    />
                    {errors.phone && (
                      <div className="relative">
                        <div className="absolute top-0 left-0 text-rose-600 text-xs py-1 w-full flex items-center">
                          <BsInfoCircle className=" mr-1 text-bold" />
                          <div>{errors.phone}</div>
                        </div>
                      </div>
                    )}
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
                    onChange={handleChange}
                    value={values.address}
                  ></textarea>
                  {errors.address && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        {errors.address}
                      </div>
                    </div>
                  )}
                </div>
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
                    onChange={handleChange}
                    value={values.pincode}
                  />
                  {errors.pincode && (
                    <div className="relative">
                      <div className="absolute top-0 left-0 text-rose-600 text-xs py-1  w-full flex items-center">
                        <BsInfoCircle className=" mr-1 text-bold" />
                        {errors.pincode}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="mb-4  mr-4  w-full">
                    <label
                      htmlFor="state"
                      className="leading-7 text-sm text-gray-800"
                    >
                      State
                    </label>
                    <input
                      name="state"
                      id="state"
                      className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={handleChange}
                      value={values.state}
                      readOnly={true}
                    />
                  </div>
                  <div className="mb-4 w-full">
                    <label
                      htmlFor="city"
                      className="leading-7 text-sm  text-gray-800"
                    >
                      City/Dist.
                    </label>
                    <input
                      name="city"
                      id="city"
                      className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-cust_light_green text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      onChange={handleChange}
                      value={values.city}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-5/12 ">
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
                <p className="float-right cursor-pointer text-gray-800">
                  - ₹ 0
                </p>
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
                <button
                  className="w-full h-11 bg-cust_green disabled:bg-emerald-200 my-3 text-cust_white font-semibold flex justify-center items-center"
                  onClick={handleSubmit}
                  disabled={
                    Object.keys(errors).length !== 0
                      ? true
                      : rzpProcessing
                      ? true
                      : false
                  }
                >
                  {rzpProcessing == null || rzpProcessing == false ? (
                    <BsBagCheckFill className="text-lg mx-1" />
                  ) : (
                    <Image src="/FormSpinner.svg" height={35} width={35} />
                  )}
                  <p>
                    {rzpProcessing
                      ? "Processing..."
                      : `PAY ₹ ${cartCtx.totalAmt.total}`}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

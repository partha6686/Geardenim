import React, { useState, useContext } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import {
  BsFillCartCheckFill,
  BsTruck,
  BsFileText,
  BsCheckCircleFill,
  BsXCircleFill,
} from "react-icons/bs";
import { CartContext } from "../../store/CartState";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const Product = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const [pin, setPin] = useState();
  const [checkDelivery, setCheckDelivery] = useState(null);
  const [size, setSize] = useState("");

  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const handleCheckPin = async () => {
    const pins = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    const pinsJson = await pins.json();
    console.log(pinsJson);
    if (pinsJson[0].Status == "Success") {
      setCheckDelivery(true);
    } else {
      setCheckDelivery(false);
    }
  };

  const handleBuyNow = () => {
    if (size === "") {
      toast.error("Please select size", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "select-size-error",
      });
      return;
    }
    const item = {
      id: product._id,
      slug: product.slug,
      pImg: product.img,
      brand: product.brand,
      name: product.title,
      size,
      qty: 1,
      mrp: product.mrp,
      price: product.price,
      dis: Math.floor(((product.mrp - product.price) / product.mrp) * 100),
      status: "pending",
    };
    cartCtx.buyNow(item);
  };

  const handleAddToCart = () => {
    if (size === "") {
      toast.error("Please select size", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "select-size-error",
      });
      return;
    }
    const item = {
      id: product._id,
      slug: product.slug,
      pImg: product.img,
      brand: product.brand,
      name: product.title,
      size,
      qty: 1,
      mrp: product.mrp,
      price: product.price,
      dis: Math.floor(((product.mrp - product.price) / product.mrp) * 100),
      status: "pending",
    };
    cartCtx.addToCart(item);
    toast.success("Item added to your cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "add-to-cart-success",
    });
  };

  // const createMarkup = () => {
  //   return { __html: product.desc };
  // };
  return (
    <>
      <Head>
        <title>{product.title} - Geardenim.com</title>
      </Head>
      <section className="body-font overflow-hidden ">
        <div className="container px-5 py-10 mx-auto min-h-screen">
          <div className="lg:w-5/6 mx-auto flex flex-wrap">
            <div className="lg:py-6 w-full lg:w-1/2 h-72 lg:h-auto max-h-[60vh]">
              <div className="relative text-center w-full h-full ">
                <Image
                  className="object-top"
                  src={product.img}
                  alt="product"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-lg sm:text-2xl font-semibold  text-cust_dark mb-1">
                {product.brand}
              </h2>
              <h1 className="text-lg sm:text-xl  text-cust_light_text">
                {product.title}
              </h1>
              <div className="flex mt-2 pb-3 border-b-2 border-cust_grey">
                {/*<span className="flex items-center border-2 border-cust_grey py-1 px-2">
                  3.9 <AiFillStar className="text-cust_green ml-1" />
                  <span className="text-gray-600 ml-3 border-l-4 border-cust_grey pl-3">
                    476 Ratings
                  </span>
                </span>*/}
              </div>
              <div className="my-3">
                <h2 className="text-lg sm:text-2xl font-semibold text-cust_dark mb-1">
                  <span> Rs. {product.price} </span>
                  <span className="mx-3 line-through text-cust_light_text">
                    Rs. {product.mrp}
                  </span>
                  <span className="text-cust_blue">
                    (
                    {Math.floor(
                      ((product.mrp - product.price) / product.mrp) * 100
                    )}
                    % OFF)
                  </span>
                </h2>
                <p className="text-cust_green font-bold ">
                  inclusive of all taxes
                </p>
              </div>
              {product.availability.filter((item) => item.qty > 0).length !==
                0 && (
                <div className="flex mt-6 items-center pb-5 mb-5">
                  <div className="flex items-center">
                    <span className="mr-3 font-semibold text-base sm:text-lg">
                      SELECT SIZE
                    </span>

                    <div className="relative">
                      <select
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-8"
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                      >
                        <option vlaue="" disabled></option>
                        {product.availability
                          .filter((item) => item.qty > 0)
                          .map((item) => (
                            <option key={item._id} value={item.size}>
                              {item.size}
                            </option>
                          ))}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {product.availability.filter((item) => item.qty > 0).length ==
                0 && (
                <div className="text-rose-700 font-semibold ">Out of Stock</div>
              )}
              <div className="border-b-2 border-cust_grey flex flex-col sm:flex-row">
                <button
                  className={`flex-1 h-11 ${
                    product.availability.filter((item) => item.qty > 0)
                      .length == 0
                      ? "bg-emerald-200"
                      : "bg-cust_green"
                  }  py-2 my-2 mx-2 text-cust_white font-semibold`}
                  onClick={handleAddToCart}
                  disabled={
                    product.availability.filter((item) => item.qty > 0)
                      .length == 0
                      ? true
                      : false
                  }
                >
                  <span className="flex justify-center items-center">
                    <BsFillCartCheckFill className="text-lg mx-1" />
                    <p>ADD TO CART</p>
                  </span>
                </button>
                <button
                  className={`flex-1 h-11 ${
                    product.availability.filter((item) => item.qty > 0)
                      .length == 0
                      ? "bg-emerald-200"
                      : "bg-cust_green"
                  }  py-2 my-2 mx-2 text-cust_white font-semibold `}
                  onClick={handleBuyNow}
                  disabled={
                    product.availability.filter((item) => item.qty > 0)
                      .length == 0
                      ? true
                      : false
                  }
                >
                  <span className="flex justify-center items-center">
                    <BsFillCartCheckFill className="text-lg mx-1" />
                    <p>BUY NOW</p>
                  </span>
                </button>
              </div>
              <div>
                <h2 className="mr-3 mt-3 mb-2 font-semibold text-base sm:text-lg flex items-center text-cust_dark">
                  DELIVERY OPTIONS{" "}
                  <BsTruck className="ml-2 text-cust_light_text" />
                </h2>
                <div className="w-1/2 flex items-center rounded border border-cust_light_text focus:border-cust_green focus:ring-2 focus:ring-cuse_light_green pr-2">
                  <input
                    type="tel"
                    id="pincode"
                    name="pincode"
                    onChange={handlePinChange}
                    className="w-full bg-cust_white text-base outline-none text-cust_dark py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <span
                    className="text-cust_green cursor-pointer"
                    onClick={handleCheckPin}
                  >
                    Check{" "}
                  </span>
                </div>
                {checkDelivery === null && (
                  <div className="text-sm text-cust_light_text mt-3">
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </div>
                )}
                {checkDelivery && (
                  <div className="text-sm text-cust_green flex items-center mt-3">
                    <BsCheckCircleFill className="mr-2" />
                    Yahh! We deliver to this location
                  </div>
                )}
                {!checkDelivery && checkDelivery !== null && (
                  <div className="text-sm text-cust_red flex items-center mt-3">
                    <BsXCircleFill className="mr-2" />
                    Sorry! We do not deliver to this location yet.
                  </div>
                )}
              </div>
              <div>
                <h2 className="mr-3 mt-3 mb-2 font-semibold text-base sm:text-lg flex items-center text-cust_dark">
                  PRODUCT DETAILS
                  <BsFileText className="ml-2 text-cust_light_text" />
                </h2>
                <div className="text-sm text-cust_light_text leading-6">
                  <div dangerouslySetInnerHTML={{ __html: product.desc }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const response = await fetch(`${process.env.HOST}product/${slug}`);
  let product = await response.json();
  return {
    props: { product },
  };
}

export default Product;

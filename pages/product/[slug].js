import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
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

const Product = () => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [checkDelivery, setCheckDelivery] = useState(null);
  const handlePinChange = (e) => {
    setPin(e.target.value);
  };
  const handleCheckPin = async () => {
    const pins = await fetch("http://localhost:3000/api/pincode");
    const pinsJson = await pins.json();
    if (pinsJson.includes(parseInt(pin))) {
      setCheckDelivery(true);
    } else {
      setCheckDelivery(false);
    }
  };

  const handleAddToCart = () => {
    const product = {
      id: "507f1f77bcf86cd799439011",
      pImg: "http://localhost:3000/_next/image?url=%2Fproduct_1.jpg&w=828&q=75",
      brand: "Kawasaki",
      name: "The Catcher in the Rye 1",
      size: "M",
      qty: 1,
      mrp: 999,
      price: 499,
      dis: 55,
    };
    cartCtx.addToCart(product);
    console.log("added");
  };
  return (
    <>
      <section className=" body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-5/6 mx-auto flex flex-wrap">
            <div className="lg:py-6 w-full lg:w-1/2 h-72 lg:h-auto max-h-[60vh]">
              <div className="relative text-center w-full h-full ">
                <Image
                  className="object-top"
                  src="/product_1.jpg"
                  alt="product"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-lg sm:text-2xl font-semibold  text-cust_dark mb-1">
                Kawasaki
              </h2>
              <h1 className="text-gray-900 text-lg sm:text-xl  text-cust_light_text">
                The Catcher in the Rye
              </h1>
              <div className="flex mt-2 pb-3 border-b-2 border-cust_grey">
                <span className="flex items-center border-2 border-cust_grey py-1 px-2">
                  3.9 <AiFillStar className="text-cust_green ml-1" />
                  <span className="text-gray-600 ml-3 border-l-4 border-cust_grey pl-3">
                    476 Ratings
                  </span>
                </span>
              </div>
              <div className="my-3">
                <h2 className="text-lg sm:text-2xl font-semibold text-cust_dark mb-1">
                  <span> Rs. 449 </span>
                  <span className="mx-3 line-through text-cust_light_text">
                    Rs.999
                  </span>
                  <span className="text-cust_blue">(55% OFF)</span>
                </h2>
                <p className="text-cust_green font-bold ">
                  inclusive of all taxes
                </p>
              </div>
              <div className="flex mt-6 items-center pb-5 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 font-semibold text-base sm:text-lg">
                    SELECT SIZE
                  </span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-8">
                      <option>XS</option>
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
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
              <div className=" border-b-2 border-cust_grey ">
                <button
                  className="w-full h-11 bg-cust_green my-3 text-cust_white font-semibold flex justify-center items-center"
                  onClick={handleAddToCart}
                >
                  <BsFillCartCheckFill className="text-lg mx-1" />
                  <p>ADD TO CART</p>
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
                <p className="text-sm text-cust_light_text leading-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  exercitationem ipsa et dignissimos reiciendis expedita laborum
                  voluptatem modi labore enim nesciunt esse incidunt nobis
                  dolore, suscipit non magnam maxime aperiam veniam officiis
                  officia. Vitae doloremque ex vero assumenda quod a, possimus
                  atque architecto. Ad voluptatibus quae perferendis harum?
                  Asperiores voluptate optio nulla officiis voluptas? Doloribus
                  facilis reiciendis adipisci voluptate. Quisquam enim fugiat
                  quis corrupti, totam minus nemo voluptatum asperiores amet est
                  similique quae libero deleniti velit aut, iusto, quia minima?
                  Ipsa eos ducimus saepe soluta consequuntur earum hic illo
                  quidem, quas, ut ipsum quo neque commodi iure repellendus
                  reprehenderit et?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

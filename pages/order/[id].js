import React from "react";
import { useRouter } from "next/router";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import OrderCard from "../../components/OrderCard";

const OrderId = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="bg-gray-50 py-4">
      <div className="container lg:px-24 mx-auto">
        <h2 className=" text-2xl font-bold my-4 mx-2 text-gray-800">
          ORDER DETAILS
        </h2>
        <div className="flex justify-between text-lg m-2">
          <p>Order Id #{id}</p>
          <a
            href="http://geardenim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold flex items-center "
          >
            Invoice
            <BsDownload className="ml-2" />
          </a>
        </div>

        <div className="flex justify-between items-center m-2">
          <p className="text-base sm:text-xl font-semibold">
            Delivered 18-Apr-2022
          </p>
          <button className="bg-cust_green text-xs sm:text-base font-semibold px-4 py-2 text-white">
            TRACK ORDER
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">
            <OrderCard />
            <OrderCard />
          </div>
          <div className="w-full md:w-5/12">
            <div className="bg-white p-3 m-2 border border-gray-300 shadow-md rounded-md">
              <div>
                <h2 className="mb-4 font-semibold">SHIPPING ADDRESS</h2>
                <p>
                  Partha Sarathi Praharaj <br />
                  B-201,Laxmi Residency phase-1 <br />
                  Haridaspur,Hanspal <br />
                  BHUBANESWAR, ODISHA 752101 <br />
                  India
                </p>
              </div>
              <div>
                <h2 className="font-semibold my-4">ORDER SUMMARY (2 Items)</h2>
                <div className="flex justify-between my-1">
                  <p className=" text-cust_light_text">Total MRP</p>
                  <p className=" text-cust_dark"> ₹ 1999</p>
                </div>
                <div className="flex justify-between my-1">
                  <p className="float-left text-cust_light_text">
                    Discount on MRP
                  </p>
                  <p className="float-right text-cust_dark">- ₹ 1000</p>
                </div>
                <div className="flex justify-between my-1">
                  <p className="float-left text-cust_light_text">
                    Coupon Discount
                  </p>
                  <p className="float-right cursor-pointer text-cust_dark">
                    - ₹ 0
                  </p>
                </div>
                <div className="flex justify-between my-1">
                  <p className="float-left text-cust_light_text">
                    Delivery Charge
                  </p>
                  <p className="float-right text-cust_dark">₹ 0</p>
                </div>
                <hr className=" text-gray-300 my-2" />
                <div className="flex justify-between mb-2">
                  <p className="float-left text-cust_light_text">
                    Total Amount
                  </p>
                  <p className="float-right text-cust_dark">₹ 999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderId;

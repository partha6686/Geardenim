import Reac, { useEffect } from "react";
import { useRouter } from "next/router";
import { BsDownload } from "react-icons/bs";
import OrderCard from "../../components/OrderCard";
import { getCookie } from "cookies-next";
import Head from "next/head";

const OrderId = ({ order, mrp, dis, dCharge }) => {
  const router = useRouter();
  const { id } = router.query;

  const createMarkup = () => {
    return { __html: order[0].address };
  };

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>
          Order Id #{order[0].orderId.split("_")[1]} - Geardenim.com
        </title>
      </Head>
      <div className="bg-gray-50 py-4 min-h-screen">
        <div className="container lg:px-24 mx-auto">
          <h2 className=" text-2xl font-bold my-4 mx-2 text-gray-800">
            ORDER DETAILS
          </h2>
          <div className="flex justify-between text-lg m-2">
            <p>
              Order Id{" "}
              <span className="font-semibold">
                #{order[0].orderId.split("_")[1]}
              </span>
            </p>
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

          {/*<div className="flex justify-between items-center m-2">
          <p className="text-base sm:text-xl font-semibold">
            Delivered 18-Apr-2022
          </p>
          <button className="bg-cust_green text-xs sm:text-base font-semibold px-4 py-2 text-white">
            TRACK ORDER
          </button>
        </div>*/}

          <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
              {order[0].products.map((item) => (
                <OrderCard key={item.id} product={item} />
              ))}
            </div>
            <div className="w-full md:w-5/12">
              <div className="bg-white p-3 m-2 border border-gray-300 shadow-md rounded-md">
                <div>
                  <h2 className="mb-2 font-semibold">SHIPPING ADDRESS</h2>
                  <p>
                    {order[0].name} <br />
                    <span dangerouslySetInnerHTML={createMarkup()} /> <br />
                    Mob: {order[0].phone}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold my-4">
                    ORDER SUMMARY ({order[0].products.length}{" "}
                    {order[0].products.length > 1 ? "Items" : "Item"})
                  </h2>
                  <div className="flex justify-between my-1">
                    <p className=" text-cust_light_text">Total MRP</p>
                    <p className=" text-cust_dark"> ₹ {mrp}</p>
                  </div>
                  <div className="flex justify-between my-1">
                    <p className="float-left text-cust_light_text">
                      Discount on MRP
                    </p>
                    <p className="float-right text-cust_dark">- ₹ {dis}</p>
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
                    <p className="float-right text-cust_dark">₹ {dCharge}</p>
                  </div>
                  <hr className=" text-gray-300 my-2" />
                  <div className="flex justify-between mb-2">
                    <p className="float-left text-cust_light_text font-semibold">
                      Total Amount
                    </p>
                    <p className="float-right text-cust_dark font-semibold">
                      ₹ {order[0].amount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // const cookies = context.req.headers.cookie;
  const { id } = context.query;
  const response = await fetch(`${process.env.HOST}userorders`, {
    method: "GET",
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  let orders = await response.json();
  let order = orders.filter((item) => item.orderId == id);
  let mrp = 0;
  let dis = 0;
  let dCharge =
    order[0].amount > 500 ? 0 : 50 - Math.floor(0.02 * order[0].amount);
  order[0].products.forEach((item) => {
    mrp += item.mrp * item.qty;
    dis += (item.mrp - item.price) * item.qty;
  });
  return {
    props: { order, mrp, dis, dCharge },
  };
}

export default OrderId;

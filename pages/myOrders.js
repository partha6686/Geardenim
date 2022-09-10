import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import HistoryCards from "../components/HistoryCards";
import Head from "next/head";

const Orders = ({ orders }) => {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Orders - Geardenim.com</title>
      </Head>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto lg:px-24 py-4">
          <h2 className="text-lg sm:text-2xl font-bold mx-2 my-2 sm:my-4 text-gray-800">
            ORDER HISTORY
          </h2>
          {orders.map((order) => (
            <HistoryCards key={order._id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // const cookies = context.req.headers.cookie;
  const response = await fetch(`${process.env.HOST}userorders`, {
    method: "GET",
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  let orders = await response.json();
  return {
    props: { orders },
  };
}

export default Orders;

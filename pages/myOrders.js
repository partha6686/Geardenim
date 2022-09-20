import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import HistoryCards from "../components/HistoryCards";
import Head from "next/head";
import EmptyOrder from "../components/EmptyOrder";

const Orders = ({ orders }) => {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Orders - Geardenim.com</title>
      </Head>
      {orders.length > 0 ? (
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
      ) : (
        <EmptyOrder />
      )}
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

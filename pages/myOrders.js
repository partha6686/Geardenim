import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import HistoryCards from "../components/HistoryCards";

const Orders = () => {
  const router = useRouter();

  useEffect(() => {
    if (getCookie("isLoggedIn") !== true) {
      router.push("/signin");
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:px-24 py-4">
        <h2 className="text-lg sm:text-2xl font-bold mx-2 my-2 sm:my-4 text-gray-800">
          ORDER HISTORY
        </h2>
        <HistoryCards />
        <HistoryCards />
      </div>
    </div>
  );
};

export default Orders;
